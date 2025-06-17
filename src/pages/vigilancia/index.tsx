'use client';

import { useEffect, useState } from 'react';
import { getCardVigilancia } from '@/lib/hygraph';
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
// import Link from "next/link";
import CreatorsComponent from "@/components/Creators";
import CardComponent from '@/components/Card';
import { 
  Activity, 
  Shield, 
  Droplets, 
  HardHat,
  AlertTriangle,
  CheckCircle2,
  Users,
  Heart
} from "lucide-react";

type Card = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

export default function VigilanciaSaude() {
  const cards = [
    {
      titulo: "Vigilância Epidemiológica",
      descricao: "Monitora doenças que podem afetar a população, como dengue, gripe e COVID-19, ajudando a prevenir e controlar surtos.",
      icon: Activity,
      color: "text-red-500"
    },
    {
      titulo: "Vigilância Sanitária",
      descricao: "Cuida da segurança de alimentos, medicamentos e produtos que usamos no dia a dia, garantindo que eles não façam mal à nossa saúde.",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      titulo: "Vigilância Ambiental",
      descricao: "Atua na área ambiental acompanhando o impacto do meio ambiente na nossa saúde, como a qualidade da água e do ar.",
      icon: Droplets,
      color: "text-green-500"
    },
    {
      titulo: "Vigilância em Saúde do Trabalhador",
      descricao: "Protege a saúde de quem trabalha, prevenindo acidentes e doenças causadas pelo ambiente de trabalho.",
      icon: HardHat,
      color: "text-yellow-500"
    }
  ];

  const [cardsVigi, setCards] = useState<Card[]>([]);
    
  useEffect(() => {
    getCardVigilancia().then(setCards);
  }, []);
    
  if (cardsVigi.length === 0) return <p>Carregando...</p>;

  return (
    <>
      <HeaderComponent />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900 dark:text-white animate-fade-in">
            Vigilância em Saúde
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            A Vigilância em Saúde atua para proteger e promover a saúde da população, 
            monitorando riscos e prevenindo doenças através de ações integradas e contínuas.
          </p>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900 dark:text-white">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-blue-50 dark:bg-gray-700 ${card.color}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">
                        {card.titulo}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {card.descricao}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900 dark:text-white">
            Benefícios da Vigilância em Saúde
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <AlertTriangle className="mx-auto h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">
                Prevenção de Doenças
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identificação precoce de riscos e implementação de medidas preventivas
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">
                Qualidade de Vida
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Promoção de ambientes saudáveis e seguros para a população
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="mx-auto h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">
                Saúde Coletiva
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proteção e promoção da saúde de toda a comunidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900 dark:text-white">
            Destaques das Nossas Ações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardsVigi.map((slide) => (
              <CardComponent 
                key={slide.id}
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

      {/* <Link
        href="/vigilancia/endemias"
        className="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
      >
        Ver Endemias
      </Link> */}

      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}