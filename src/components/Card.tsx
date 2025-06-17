/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

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
        <div 
          key={idx} 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
        >
          <div className="relative w-full pb-[56.25%] mb-4 rounded-xl overflow-hidden">
            <img
              src={card.imagem}
              alt={card.titulo}
              className="absolute inset-0 w-full h-full object-contain bg-gray-100 dark:bg-gray-700"
              onClick={() => setImagemExpandida(card.imagem)}
            />
          </div>
          <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">{card.titulo}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{card.descricao}</p>
        </div>
      ))}

      {/* Modal de imagem expandida */}
      {imagemExpandida && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setImagemExpandida(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setImagemExpandida(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={imagemExpandida}
              alt="Imagem em tela cheia"
              className="w-full h-auto rounded-lg shadow-2xl bg-gray-100 dark:bg-gray-700"
            />
          </div>
        </div>
      )}
    </>
  );
}

