import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Inicializa o banco SQLite
async function openDb() {
  return open({
    filename: './banco.db',
    driver: sqlite3.Database
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { endereco, tipo, observacoes } = req.body;
    const db = await openDb();

    await db.run(`
      CREATE TABLE IF NOT EXISTS denuncias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        endereco TEXT,
        tipo TEXT,
        observacoes TEXT,
        data TEXT
      )
    `);

    await db.run(
      'INSERT INTO denuncias (endereco, tipo, observacoes, data) VALUES (?, ?, ?, ?)',
      [endereco, tipo, observacoes, new Date().toISOString()]
    );

    res.status(200).json({ message: 'Denúncia registrada com sucesso!' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
