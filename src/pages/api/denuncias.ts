import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, Fields, Files, File } from "formidable";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper para parsear o form usando Promises
const parseForm = (req: NextApiRequest): Promise<{ fields: Fields; files: Files }> => {
  const form = new IncomingForm({ keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { fields, files } = await parseForm(req);

    const endereco = Array.isArray(fields.endereco) ? fields.endereco[0] : fields.endereco || "";
    const tipo = Array.isArray(fields.tipo) ? fields.tipo[0] : fields.tipo || "";
    const observacoes = Array.isArray(fields.observacoes) ? fields.observacoes[0] : fields.observacoes || "";
    const cpf = Array.isArray(fields.cpf) ? fields.cpf[0] : fields.cpf || "";
    const imagem = files.imagem as unknown as File;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    const mailOptions = {
      from: `"Denúncia de Endemia" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO || process.env.EMAIL_USER,
      subject: "Nova denúncia de endemia",
      text: `CPF: ${cpf}\nEndereço: ${endereco}\nTipo: ${tipo}\nObservações: ${observacoes}`,
      attachments: imagem
        ? [
            {
              filename: imagem.originalFilename || "imagem.jpg",
              path: imagem.filepath,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Denúncia enviada com sucesso!" });
  } catch (error) {
    console.error("Erro no envio:", error);
    res.status(500).json({ message: "Erro ao enviar a denúncia." });
  }
}
