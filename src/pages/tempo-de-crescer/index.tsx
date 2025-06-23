'use client';

import { useEffect, useState } from 'react';
import { getCardTempoCrescer } from '@/lib/hygraph';
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from "@/components/Creators";
import CardComponent from "@/components/Card";
import { motion } from "framer-motion";
import { 
  Target,
  Users,
  Clock,
  Palette,
  Music,
  Activity,
  Heart,
  Sparkles,
  Brain,
  Smile
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import AnimatedDiv from "@/components/AnimatedDiv";

type Card = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type InfoCard = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type ActivityCard = {
  title: string;
  icon: React.ElementType;
  color: string;
};

const InfoCard = ({ icon: Icon, title, description }: InfoCard) => (
  <AnimatedDiv
    className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="bg-blue-100 dark:bg-gray-700 p-4 rounded-xl w-fit mb-4">
      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
    </div>
    <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">{title}</h2>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      {description}
    </p>
  </AnimatedDiv>
);

const ActivityCard = ({ title, icon: Icon, color }: ActivityCard) => (
  <AnimatedDiv
    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className={`p-3 rounded-xl bg-blue-50 dark:bg-gray-700 w-fit mb-4 ${color}`}>
      <Icon size={24} />
    </div>
    <p className="text-lg font-medium text-gray-800 dark:text-white">
      {title}
    </p>
  </AnimatedDiv>
);

const infoCards = [
  {
    icon: Target,
    title: "Objetivo",
    description: "Estimular o crescimento saudável das crianças por meio de atividades educativas, sensoriais e sociais, focando na inclusão e no desenvolvimento integral."
  },
  {
    icon: Users,
    title: "Público Atendido",
    description: "Crianças até 11 anos 11 meses e 29 dias, com atenção especial a aquelas com Transtorno do Espectro Autista (TEA) e outras síndromes. A equipe multidisciplinar garante um ambiente seguro, lúdico e adaptado."
  },
  {
    icon: Clock,
    title: "Funcionamento",
    description: "De segunda a sexta-feira de acordo com o cronograma, em um espaço especialmente adaptado, com atividades planejadas e acompanhadas por profissionais capacitados."
  }
];

const activities = [
  { title: "Brincadeiras pedagógicas", icon: Sparkles, color: "text-yellow-500" },
  { title: "Atividades sensoriais", icon: Brain, color: "text-purple-500" },
  { title: "Oficinas de arte", icon: Palette, color: "text-pink-500" },
  { title: "Oficinas de música", icon: Music, color: "text-green-500" },
  { title: "Expressão corporal", icon: Activity, color: "text-blue-500" },
  { title: "Acompanhamento fonoaudiológico", icon: Smile, color: "text-red-500" }
];

export default function TempoDeCrescer() {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCardTempoCrescer();
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

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-20 px-4 bg-gradient-to-br from-yellow-100 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/tempo-de-crescer/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto max-w-5xl text-center relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900 dark:text-white"
          >
            Tempo de Crescer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Um programa da Prefeitura de Campos Sales dedicado ao desenvolvimento infantil, 
            com atenção especial a crianças com Transtorno do Espectro Autista (TEA) e outras síndromes.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
              <Heart className="h-8 w-8 text-red-500" />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
              <Sparkles className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
              <Brain className="h-8 w-8 text-blue-500" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 px-4 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {infoCards.map((info, index) => (
              <InfoCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>
            Atividades Realizadas
          </SectionTitle>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <AnimatedDiv
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-white">
              Cuidar é fazer crescer com amor
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              O Tempo de Crescer transforma a vida das nossas crianças,
              oferecendo apoio, afeto e estímulos adequados. É um espaço onde cada criança é respeitada em sua individualidade,
              desenvolvendo suas habilidades com segurança e alegria.
            </p>
          </AnimatedDiv>
        </div>
      </section>

      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle>
            Destaques das Nossas Ações
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((slide) => (
              <AnimatedDiv
                key={slide.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
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
