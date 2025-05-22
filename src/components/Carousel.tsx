/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Acao = {
  imagem: string;
  titulo: string;
  descricao?: string;
};

type CarouselProps = {
  acoes: Acao[];
};

export default function CarouselComponent({ acoes }: CarouselProps) {
  const [imagemExpandida, setImagemExpandida] = useState<string | null>(null);

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 10000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {acoes.map((acao, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white dark:bg-gray-700 shadow rounded p-4 cursor-pointer">
                <img
                  src={acao.imagem}
                  alt={acao.titulo}
                  className="mx-auto max-h-96 w-full object-contain rounded mb-4"
                  onClick={() => setImagemExpandida(acao.imagem)}
                />
                <h3 className="text-xl font-semibold">{acao.titulo}</h3>
                {acao.descricao && (
                  <p className="text-sm mb-10">{acao.descricao}</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal da imagem em tela cheia */}
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
