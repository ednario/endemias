/* eslint-disable @next/next/no-img-element */
interface ICard {
  imagem: string;
  titulo: string;
  descricao?: string;
}

interface ICardProps {
  cards: ICard[];
}

export default function CardComponent({ cards }: ICardProps) {
  return (
    <>
              {cards.map((card, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow p-5">
              <div className="relative w-full pb-[56.25%] mb-3 rounded overflow-hidden"> {/* proporção 16:9 */}
                <img
                  src={card.imagem}
                  alt={card.titulo}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{card.titulo}</h3>
              <p className="text-sm mt-2">{card.descricao}</p>
            </div>
          ))}
    </>
  );
}