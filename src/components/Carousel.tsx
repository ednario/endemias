/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Acao = {
  imagem: string;
  titulo: string;
  descricao?: string; // torna opcional, se necessário
};

type CarouselProps = {
  acoes: Acao[];
};

export default function CarouselComponent({ acoes }: CarouselProps) {
  return (
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
            <div className="bg-white dark:bg-gray-700 shadow rounded p-4">
              <img
                src={acao.imagem}
                alt={acao.titulo}
                className="mx-auto h-64 w-full object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{acao.titulo}</h3>
              {acao.descricao && <p className="text-sm mb-10">{acao.descricao}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
