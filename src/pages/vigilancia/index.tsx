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
  // Heart
} from "lucide-react";
import SectionTitle from "@/components/motionComponents/SectionTitle";
import AnimatedDiv from "@/components/motionComponents/AnimatedDiv";
import MotionSection from "@/components/motionComponents/MotionSection";

type Card = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type AreaCard = {
  titulo: string;
  descricao: string;
  icon: React.ElementType;
  color: string;
};

type BenefitCard = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
};

const AreaCard = ({ titulo, descricao, icon: Icon, color }: AreaCard) => (
  <AnimatedDiv
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8"
  >
    <div className="flex items-start space-x-4">
      <div className={`p-3 rounded-xl bg-blue-50 dark:bg-gray-700 ${color}`}>
        <Icon size={24} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">
          {titulo}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {descricao}
        </p>
      </div>
    </div>
  </AnimatedDiv>
);

const BenefitCard = ({ icon: Icon, title, description, color }: BenefitCard) => (
  <AnimatedDiv
    className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <Icon className={`mx-auto h-12 w-12 ${color} mb-4`} />
    <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </AnimatedDiv>
);

export default function VigilanciaSaude() {
  const areas = [
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

  const benefits = [
    {
      icon: AlertTriangle,
      title: "Prevenção de Doenças",
      description: "Identificação precoce de riscos e implementação de medidas preventivas",
      color: "text-red-500"
    },
    {
      icon: CheckCircle2,
      title: "Qualidade de Vida",
      description: "Promoção de ambientes saudáveis e seguros para a população",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Saúde Coletiva",
      description: "Proteção e promoção da saúde de toda a comunidade",
      color: "text-blue-500"
    }
  ];

  const [cardsVigi, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCardVigilancia();
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
            Vigilância em Saúde
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            A Vigilância em Saúde atua para proteger e promover a saúde da população, 
            monitorando riscos e prevenindo doenças através de ações integradas e contínuas.
          </p>
        </div>
      </MotionSection>

      {/* Áreas de Atuação */}
      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>Áreas de Atuação</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {areas.map((area, idx) => (
              <AreaCard key={idx} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>Benefícios da Vigilância em Saúde</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <BenefitCard key={idx} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle>Destaques das Nossas Ações</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardsVigi.map((slide) => (
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