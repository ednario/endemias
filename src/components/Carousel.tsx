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
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[Autoplay, Pagination]}
          className="relative"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-white dark:bg-gray-700 shadow rounded p-4 cursor-pointer h-[400px] flex flex-col">
                <div className="relative flex-1 min-h-0">
                  <div className="h-[250px] w-full">
                    <img
                      src={slide.image.url}
                      alt={slide.title}
                      className="h-full w-full object-contain rounded"
                      onClick={() => setImagemExpandida(slide.image.url)}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold">{slide.title}</h3>
                    {slide.description && (
                      <p className="text-sm mt-2">{slide.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination !bottom-0 !relative mt-4"></div>
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

      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 1rem;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #CBD5E0;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #1E40AF;
        }
        .dark .swiper-pagination-bullet {
          background: #4B5563;
        }
        .dark .swiper-pagination-bullet-active {
          background: #60A5FA;
        }
      `}</style>
    </>
  );
}
