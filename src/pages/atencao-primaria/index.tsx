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

      <section className="py-16 px-4 dark:bg-gray-800 dark:text-white bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl text-blue-900 font-bold mb-6 dark:text-white">
            Atenção Primária à Saúde
          </h1>
          <p className="mb-10 text-lg">
            A Atenção Primária é a porta de entrada preferencial do SUS, promovendo saúde, prevenção e cuidado contínuo
            por meio de equipes multiprofissionais nas Unidades Básicas de Saúde (UBS).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow">
              <h2 className="text-xl font-semibold mb-3">Serviços Oferecidos</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-200">
                <li>Consultas médicas e de enfermagem</li>
                <li>Vacinação e campanhas de imunização</li>
                <li>Atendimento odontológico</li>
                <li>Pré-natal, puericultura e acompanhamento familiar</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow">
              <h2 className="text-xl font-semibold mb-3">Nossas UBSs</h2>
              <p>Estamos presentes em todos os bairros da cidade. Encontre a unidade mais próxima da sua casa.</p>
              <a
                href="#ubs"
                className="inline-block mt-4 bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800 transition"
              >
                Ver unidades
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Qual a função da Atenção Primária?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow">
              <HeartPulse className="mx-auto mb-3 h-10 w-10 text-blue-700" />
              <h3 className="font-semibold mb-2">Prevenção</h3>
              <p className="text-sm">Ações de prevenção reduzem internações e melhoram a qualidade de vida.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow">
              <Stethoscope className="mx-auto mb-3 h-10 w-10 text-blue-700" />
              <h3 className="font-semibold mb-2">Cuidado Contínuo</h3>
              <p className="text-sm">Acompanhamento regular da saúde em todas as fases da vida.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow">
              <Users className="mx-auto mb-3 h-10 w-10 text-blue-700" />
              <h3 className="font-semibold mb-2">Acolhimento</h3>
              <p className="text-sm">Humanização do atendimento para toda a comunidade.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow">
              <Syringe className="mx-auto mb-3 h-10 w-10 text-blue-700" />
              <h3 className="font-semibold mb-2">Imunização</h3>
              <p className="text-sm">Vacinas para proteger a população contra diversas doenças.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ubs" className="py-16 px-4 bg-gray-100 dark:bg-gray-800 dark:text-white">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl font-bold mb-10 text-center text-blue-900 dark:text-white">
      Unidades Básicas de Saúde
    </h2>

    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 text-center">Sede</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow flex items-start gap-3"
          >
            <span className="text-2xl">🏥</span>
            <div>
              <p className="font-semibold">{ubs.nome}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{ubs.endereco}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-center">Distritos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow flex items-start gap-3"
          >
            <span className="text-2xl">🏥</span>
            <div>
              <p className="font-semibold">{ubs.nome}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{ubs.endereco}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
      </section>

      <section className="py-16 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-center mt-8">Destaques das Nossas Ações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
