import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { endereco, tipo, observacoes } = req.body as {
    endereco: string;
    tipo: string;
    observacoes?: string;
  };

  if (!endereco || !tipo) {
    return res.status(400).json({ message: 'Endereço e tipo são obrigatórios' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"Denúncia de Endemia" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO || process.env.EMAIL_USER,
      subject: 'Nova denúncia de foco de endemia',
      text: `
        Endereço: ${endereco}
        Tipo de foco: ${tipo}
        Observações: ${observacoes || 'Nenhuma'}
      `
    });

    return res.status(200).json({ message: 'Denúncia enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({ message: 'Erro ao enviar denúncia' });
  }
}
