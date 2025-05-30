/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { getCarouselItems } from '@/lib/hygraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type Slide = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

export default function Carousel() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [imagemExpandida, setImagemExpandida] = useState<string | null>(null);

  useEffect(() => {
    getCarouselItems().then(setSlides);
  }, []);

  if (slides.length === 0) return <p>Carregando...</p>;

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
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-white dark:bg-gray-700 shadow rounded p-4 cursor-pointer">
                <img
                  src={slide.image.url}
                  alt={slide.title}
                  className="mx-auto max-h-96 w-full object-contain rounded mb-4"
                  onClick={() => setImagemExpandida(slide.image.url)}
                />
                <h3 className="text-xl font-semibold">{slide.title}</h3>
                {slide.description && (
                  <p className="text-sm mb-10">{slide.description}</p>
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
