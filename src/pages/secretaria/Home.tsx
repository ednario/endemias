/* eslint-disable @next/next/no-img-element */

// Carrossel com Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";

export default function HomePage() {
  const acoes = [
    { imagem: "/images/carrossel/001.jpeg", titulo: "Mutirão contra Dengue", descricao: "Realizado no bairro Centro com 50 agentes." },
    { imagem: "/images/carrossel/002.jpeg", titulo: "Mutirão contra Dengue", descricao: "Realizado no bairro Centro com 50 agentes." },
    { imagem: "/images/carrossel/003.jpeg", titulo: "Mutirão contra Dengue", descricao: "Realizado no bairro Centro com 50 agentes." },
    { imagem: "/images/carrossel/004.jpeg", titulo: "Mutirão contra Dengue", descricao: "Realizado no bairro Centro com 50 agentes." },
    { imagem: "/images/carrossel/005.jpeg", titulo: "Mutirão contra Dengue", descricao: "Realizado no bairro Centro com 50 agentes." },
  ];

  return (
    <>
      <HeaderComponent />
      <section className="py-12 px-4 bg-gray-100 dark:bg-gray-900 dark:text-white text-center">
        <h1 className="text-1xl sm:text-3xl font-bold mb-6">Secretaria Municipal de Saúde</h1>
        <p className="mb-8 max-w-2xl mx-auto">Trabalhamos todos os dias para cuidar da saúde do nosso povo. Conheça algumas ações em destaque abaixo.</p>

        <div className="max-w-3xl mx-auto">
          <Swiper spaceBetween={30} slidesPerView={1} loop={true} autoplay>
            {acoes.map((acao, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white dark:bg-gray-700 shadow rounded p-4">
                  <img src={acao.imagem} alt={acao.titulo} className="mx-auto h-64 w-3xl object-cover rounded mb-4" />
                  <h3 className="text-xl font-semibold">{acao.titulo}</h3>
                  <p className="text-sm">{acao.descricao}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <FooterComponent />
    </>
  );
}
