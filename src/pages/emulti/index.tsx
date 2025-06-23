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
  Brain,
  Activity,
  Pill
} from "lucide-react";
import CardComponent from "@/components/Card";
import SectionTitle from "@/components/motionComponents/SectionTitle";
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

// Componentes
const ObjectiveCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <AnimatedDiv
    className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <Icon className="mx-auto h-12 w-12 text-blue-700 mb-4" />
    <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </AnimatedDiv>
);

const AreaCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <AnimatedDiv
    className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center"
  >
    <Icon className="mx-auto h-10 w-10 text-blue-700 mb-3" />
    <h3 className="font-semibold text-lg text-blue-900 dark:text-white">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
  </AnimatedDiv>
);

// Dados estáticos
const objectives = [
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Colocar o paciente no centro do cuidado, respeitando sua singularidade."
  },
  {
    icon: Heart,
    title: "Promoção da Saúde",
    description: "Fomentar práticas saudáveis e prevenir doenças com ações educativas."
  },
  {
    icon: HelpingHand,
    title: "Cuidado Integral",
    description: "Ações interdisciplinares para garantir acolhimento e resolutividade."
  }
];

const areas = [
  {
    icon: Brain,
    title: "Psicologia",
    description: "Acompanhamento psicológico e saúde mental"
  },
  {
    icon: Users,
    title: "Serviço Social",
    description: "Assistência social e orientação"
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description: "Reabilitação e prevenção"
  },
  {
    icon: Pill,
    title: "Nutrição",
    description: "Avaliação e orientação nutricional"
  }
];

export default function EmultiPage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCardEMULTI();
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

      {/* Hero Section */}
      <MotionSection
        className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900 dark:text-white animate-fade-in">
            EMULTI - Equipe Multiprofissional
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            A EMULTI é composta por profissionais de diferentes áreas da saúde que atuam de forma integrada para garantir
            o cuidado integral dos usuários do SUS.
          </p>
        </div>
      </MotionSection>

      {/* Objetivos Section */}
      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>Objetivos da EMULTI</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {objectives.map((objective, index) => (
              <ObjectiveCard
                key={index}
                icon={objective.icon}
                title={objective.title}
                description={objective.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Atuação Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>Áreas de Atuação</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, index) => (
              <AreaCard
                key={index}
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTitle>Destaques das Nossas Ações</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((slide) => (
              <AnimatedDiv
                key={slide.id}
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
