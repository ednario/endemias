 'use client';

import { useEffect, useState } from 'react';
import { getCardAtencao } from '@/lib/hygraph';
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from "@/components/Creators";
import { HeartPulse, Stethoscope, Syringe, Users } from "lucide-react";
import CardComponent from "@/components/Card";

type Card = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

export default function AtencaoPrimaria() {
  const [cards, setCards] = useState<Card[]>([]);
  
    useEffect(() => {
      getCardAtencao().then(setCards);
    }, []);
  
    if (cards.length === 0) return <p>Carregando...</p>;
  
  return (
    <>
      <HeaderComponent />

      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl text-blue-900 font-bold mb-8 dark:text-white animate-fade-in">
            Atenção Primária à Saúde
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            A Atenção Primária é a porta de entrada preferencial do SUS, promovendo saúde, prevenção e cuidado contínuo
            por meio de equipes multiprofissionais nas Unidades Básicas de Saúde (UBS).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-white">Serviços Oferecidos</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-200">
                <li className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Consultas médicas e de enfermagem</li>
                <li className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Vacinação e campanhas de imunização</li>
                <li className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Atendimento odontológico</li>
                <li className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">Pré-natal, puericultura e acompanhamento familiar</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-white">Nossas UBSs</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">Estamos presentes em todos os bairros da cidade. Encontre a unidade mais próxima da sua casa.</p>
              <a
                href="#ubs"
                className="inline-block mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Ver unidades
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-white">Qual a função da Atenção Primária?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-8 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <HeartPulse className="mx-auto mb-4 h-12 w-12 text-blue-700" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Prevenção</h3>
              <p className="text-gray-700 dark:text-gray-300">Ações de prevenção reduzem internações e melhoram a qualidade de vida.</p>
            </div>
            <div className="p-8 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Stethoscope className="mx-auto mb-4 h-12 w-12 text-blue-700" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Cuidado Contínuo</h3>
              <p className="text-gray-700 dark:text-gray-300">Acompanhamento regular da saúde em todas as fases da vida.</p>
            </div>
            <div className="p-8 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Users className="mx-auto mb-4 h-12 w-12 text-blue-700" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Acolhimento</h3>
              <p className="text-gray-700 dark:text-gray-300">Humanização do atendimento para toda a comunidade.</p>
            </div>
            <div className="p-8 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Syringe className="mx-auto mb-4 h-12 w-12 text-blue-700" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Imunização</h3>
              <p className="text-gray-700 dark:text-gray-300">Vacinas para proteger a população contra diversas doenças.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ubs" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-900 dark:text-white">
            Unidades Básicas de Saúde
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-800 dark:text-blue-300">Sede</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { nome: "UBS Alto Alegre", endereco: "Avenida Emiliano Fortaleza" },
                { nome: "UBS Aparecida", endereco: "Travessa José Pedro" },
                { nome: "UBS Batalhão", endereco: "Rua Papa Francisco" },
                { nome: "UBS Barragem", endereco: "Rua Doutor Cloves, n°132" },
                { nome: "UBS Guarani", endereco: "Av. Francisco Veloso de Andrade" },
                { nome: "UBS Centro", endereco: "Rua João Severo Cortez, n°922" },
              ].map((ubs, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4"
                >
                  <span className="text-3xl">🏥</span>
                  <div>
                    <p className="font-semibold text-lg text-blue-900 dark:text-white">{ubs.nome}</p>
                    <p className="text-gray-600 dark:text-gray-300">{ubs.endereco}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-800 dark:text-blue-300">Distritos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { nome: "UBS Caldeirão", endereco: "Distrito Caldeirão" },
                { nome: "UBS São José", endereco: "Agrovila São José" },
                { nome: "UBS Carmelópolis", endereco: "****" },
                { nome: "UBS Quixariú", endereco: "Leonardo de Andrade, n°272" },
                { nome: "UBS Barão", endereco: "Rua Antônio José de Souza, n°107" },
                { nome: "UBS Itaguá", endereco: "Rua da Laje" },
              ].map((ubs, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4"
                >
                  <span className="text-3xl">🏥</span>
                  <div>
                    <p className="font-semibold text-lg text-blue-900 dark:text-white">{ubs.nome}</p>
                    <p className="text-gray-600 dark:text-gray-300">{ubs.endereco}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 dark:text-white">Destaques das Nossas Ações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((slide) => (
              <CardComponent key={slide.id}
                cards={[
                  {
                    titulo: slide.title,
                    imagem: slide.image.url,
                    descricao: slide.description
                  }
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}
