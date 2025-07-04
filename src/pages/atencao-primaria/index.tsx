'use client';

import { useEffect, useState } from 'react';
import { getCardAtencao } from '@/lib/hygraph';
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from "@/components/Creators";
import { HeartPulse, Stethoscope, Syringe, Users } from "lucide-react";
import CardComponent from "@/components/Card";
import { motion } from "framer-motion";
import SectionTitle from "@/components/motionComponents/SectionTitle";
import InfoList from "@/components/InfoList";
import AnimatedDiv from "@/components/motionComponents/AnimatedDiv";
import MotionSection from "@/components/motionComponents/MotionSection";

// Tipos
type Card = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type UBS = {
  nome: string;
  endereco: string;
};

// Componentes
const ServiceCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <AnimatedDiv className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-2xl font-semibold mb-4 text-blue-900 dark:text-white">{title}</h2>
    {children}
  </AnimatedDiv>
);

const FunctionCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <AnimatedDiv className="p-8 bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="mx-auto mb-4 h-12 w-12 text-blue-700" />
    <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </AnimatedDiv>
);

const UBSCard = ({ nome, endereco }: UBS) => (
  <AnimatedDiv className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-4">
    <span className="text-3xl">🏥</span>
    <div>
      <p className="font-semibold text-lg text-blue-900 dark:text-white">{nome}</p>
      <p className="text-gray-600 dark:text-gray-300">{endereco}</p>
    </div>
  </AnimatedDiv>
);

// Dados estáticos
const functions = [
  {
    icon: HeartPulse,
    title: "Prevenção",
    description: "Ações de prevenção reduzem internações e melhoram a qualidade de vida."
  },
  {
    icon: Stethoscope,
    title: "Cuidado Contínuo",
    description: "Acompanhamento regular da saúde em todas as fases da vida."
  },
  {
    icon: Users,
    title: "Acolhimento",
    description: "Humanização do atendimento para toda a comunidade."
  },
  {
    icon: Syringe,
    title: "Imunização",
    description: "Vacinas para proteger a população contra diversas doenças."
  }
];

const ubsSede = [
  { nome: "UBS Alto Alegre", endereco: "Avenida Emiliano Fortaleza" },
  { nome: "UBS Aparecida", endereco: "Travessa José Pedro" },
  { nome: "UBS Batalhão", endereco: "Rua Papa Francisco" },
  { nome: "UBS Barragem", endereco: "Rua Doutor Cloves, n°132" },
  { nome: "UBS Guarani", endereco: "Av. Francisco Veloso de Andrade" },
  { nome: "UBS Centro", endereco: "Rua João Severo Cortez, n°922" }
];

const ubsDistritos = [
  { nome: "UBS Caldeirão", endereco: "Distrito Caldeirão" },
  { nome: "UBS São José", endereco: "Agrovila São José" },
  { nome: "UBS Carmelópolis", endereco: "****" },
  { nome: "UBS Quixariú", endereco: "Leonardo de Andrade, n°272" },
  { nome: "UBS Barão", endereco: "Rua Antônio José de Souza, n°107" },
  { nome: "UBS Itaguá", endereco: "Rua da Laje" }
];

export default function AtencaoPrimaria() {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCardAtencao();
        setCards(data);
      } catch (err) {
        setError('Erro ao carregar os dados. Por favor, tente novamente mais tarde.');
        console.error('Erro ao carregar cards:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold mb-2">Ops! Algo deu errado</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeaderComponent />

      <MotionSection 
        className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl text-blue-900 font-bold mb-8 dark:text-white animate-fade-in">
            Atenção Primária à Saúde
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            A Atenção Primária é a porta de entrada preferencial do SUS, promovendo saúde, prevenção e cuidado contínuo
            por meio de equipes multiprofissionais nas Unidades Básicas de Saúde (UBS).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <ServiceCard title="Serviços Oferecidos">
              <InfoList title="Serviços Oferecidos" icon={() => null} iconClass="" items={[
                "Consultas médicas e de enfermagem",
                "Vacinação e campanhas de imunização",
                "Atendimento odontológico",
                "Pré-natal, puericultura e acompanhamento familiar"
              ]} />
            </ServiceCard>

            <ServiceCard title="Nossas UBSs">
              <p className="text-gray-700 dark:text-gray-300 mb-6">Estamos presentes em todos os bairros da cidade. Encontre a unidade mais próxima da sua casa.</p>
              <motion.a
                href="#ubs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md"
              >
                Ver unidades
              </motion.a>
            </ServiceCard>
          </div>
        </div>
      </MotionSection>

      <section className="py-20 px-4 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>Qual a função da Atenção Primária?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {functions.map((func, index) => (
              <FunctionCard
                key={index}
                icon={func.icon}
                title={func.title}
                description={func.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="ubs" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle>Unidades Básicas de Saúde</SectionTitle>

          <div className="mb-16">
            <SectionTitle>Sede</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ubsSede.map((ubs, index) => (
                <UBSCard key={index} {...ubs} />
              ))}
            </div>
          </div>

          <div>
            <SectionTitle>Distritos</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ubsDistritos.map((ubs, index) => (
                <UBSCard key={index} {...ubs} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTitle>Destaques das Nossas Ações</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((slide) => (
              <AnimatedDiv
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <CardComponent
                  cards={[
                    {
                      titulo: slide.title,
                      imagem: slide.image.url,
                      descricao: slide.description
                    }
                  ]}
                />
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}
