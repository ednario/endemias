import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, Fields, Files, File } from "formidable";
import fs from "fs";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

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
    const imagem: File | undefined = Array.isArray(files.imagem) ? files.imagem[0] : files.imagem;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mailOptions: any = {
      from: `"Denúncia de Endemia" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO || process.env.EMAIL_USER,
      subject: "Nova denúncia de endemia",
      text: `CPF: ${cpf}\nEndereço: ${endereco}\nTipo: ${tipo}\nObservações: ${observacoes}`,
    };

    if (imagem && imagem.filepath) {
      const fileBuffer = fs.readFileSync(imagem.filepath);
      mailOptions.attachments = [
        {
          filename: imagem.originalFilename || "imagem.jpg",
          content: fileBuffer,
          contentType: imagem.mimetype || "image/jpeg",
        },
      ];
    }

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Denúncia enviada com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ message: "Erro ao enviar o e-mail." });
  }
}
