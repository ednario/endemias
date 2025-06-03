/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

interface ICard {
  imagem: string;
  titulo: string;
  descricao?: string;
}

interface ICardProps {
  cards: ICard[];
}

export default function CardComponent({ cards }: ICardProps) {
  const [imagemExpandida, setImagemExpandida] = useState<string | null>(null);

  return (
    <>
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5">
          <div className="relative w-full pb-[56.25%] mb-3 rounded overflow-hidden cursor-pointer">
            <img
              src={card.imagem}
              alt={card.titulo}
              className="absolute inset-0 w-full h-full object-contain"
              onClick={() => setImagemExpandida(card.imagem)}
            />
          </div>
          <h3 className="text-xl font-semibold">{card.titulo}</h3>
          <p className="text-sm mt-2">{card.descricao}</p>
        </div>
      ))}

      {/* Modal de imagem expandida */}
      {imagemExpandida && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setImagemExpandida(null)}
        >
          <img
            src={imagemExpandida}
            alt="Imagem em tela cheia"
            className="max-h-full max-w-full rounded shadow-lg"
          />
        </div>
      )}
    </>
  );
}
