'use client';

import { useEffect, useState } from 'react';
import { getCardEMULTI } from '@/lib/hygraph';
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from "@/components/Creators";
import { 
  Users,
  Heart, 
  HelpingHand,
  Stethoscope,
  Soup,
  Brain,
  Activity,
  Pill
} from "lucide-react";
import CardComponent from "@/components/Card";

type Card = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

export default function EmultiPage() {
  const [cards, setCards] = useState<Card[]>([]);
    
  useEffect(() => {
    getCardEMULTI().then(setCards);
  }, []);
    
  if (cards.length === 0) return <p>Carregando...</p>;

  return (
    <>
      <HeaderComponent />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900 dark:text-white animate-fade-in">
            EMULTI - Equipe Multiprofissional
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            A EMULTI é composta por profissionais de diferentes áreas da saúde que atuam de forma integrada para garantir
            o cuidado integral dos usuários do SUS.
          </p>
        </div>
      </section>

      {/* Objetivos Section */}
      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900 dark:text-white">Objetivos da EMULTI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Users className="mx-auto h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Atendimento Humanizado</h3>
              <p className="text-gray-600 dark:text-gray-300">Colocar o paciente no centro do cuidado, respeitando sua singularidade.</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Heart className="mx-auto h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Promoção da Saúde</h3>
              <p className="text-gray-600 dark:text-gray-300">Fomentar práticas saudáveis e prevenir doenças com ações educativas.</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <HelpingHand className="mx-auto h-12 w-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">Cuidado Integral</h3>
              <p className="text-gray-600 dark:text-gray-300">Ações interdisciplinares para garantir acolhimento e resolutividade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900 dark:text-white">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center">
              <Brain className="mx-auto h-10 w-10 text-blue-700 mb-3" />
              <h3 className="font-semibold text-lg text-blue-900 dark:text-white">Psicologia</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Acompanhamento psicológico e saúde mental</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center">
              <Users className="mx-auto h-10 w-10 text-blue-700 mb-3" />
              <h3 className="font-semibold text-lg text-blue-900 dark:text-white">Serviço Social</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Assistência social e orientação</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center">
              <Activity className="mx-auto h-10 w-10 text-blue-700 mb-3" />
              <h3 className="font-semibold text-lg text-blue-900 dark:text-white">Fisioterapia</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Reabilitação e prevenção</p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center">
              <Pill className="mx-auto h-10 w-10 text-blue-700 mb-3" />
              <h3 className="font-semibold text-lg text-blue-900 dark:text-white">Nutrição</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Avaliação e orientação nutricional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-900 dark:text-white">Destaques das Nossas Ações</h2>
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
