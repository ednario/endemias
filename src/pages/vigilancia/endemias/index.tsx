'use client';

import { useEffect, useState } from 'react';
import { getCardEndemias } from '@/lib/hygraph';
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from "@/components/Creators";
import CardComponent from '@/components/Card';
import { motion } from "framer-motion";
import { 
  Bug,
  Shield,
  AlertTriangle,
  Users,
  MapPin,
  Calendar,
} from "lucide-react";
import AnimatedDiv from "@/components/AnimatedDiv";

// Tipos
type Card = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
};

type DiseaseCard = {
  titulo: string;
  descricao: string;
  icon: React.ElementType;
  color: string;
  sintomas: string[];
  prevencao: string[];
};

type ActionCard = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
};

// Componentes auxiliares
const InfoList: React.FC<{ title: string; icon: React.ElementType; iconClass: string; items: string[] }> = ({ title, icon: Icon, iconClass, items }) => (
  <div>
    <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-white flex items-center gap-2">
      <Icon className={iconClass + " h-5 w-5"} />
      {title}
    </h3>
    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
      {items.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl font-bold mb-12 text-center text-blue-900 dark:text-white"
  >
    {children}
  </motion.h2>
);

// Componentes
const DiseaseCard: React.FC<DiseaseCard> = ({ titulo, descricao, icon: Icon, color, sintomas, prevencao }) => (
  <AnimatedDiv
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8"
  >
    <div className="flex items-start space-x-4 mb-6">
      <div className={`p-3 rounded-xl bg-blue-50 dark:bg-gray-700 ${color}`}>
        <Icon size={24} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">{titulo}</h2>
        <p className="text-gray-600 dark:text-gray-300">{descricao}</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InfoList title="Sintomas" icon={AlertTriangle} iconClass="text-red-500" items={sintomas} />
      <InfoList title="Prevenção" icon={Shield} iconClass="text-green-500" items={prevencao} />
    </div>
  </AnimatedDiv>
);

const ActionCard: React.FC<ActionCard> = ({ icon: Icon, title, description, color }) => (
  <AnimatedDiv
    className="bg-white dark:bg-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <Icon className={`mx-auto h-12 w-12 ${color} mb-4`} />
    <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </AnimatedDiv>
);

// Dados estáticos
const diseases = [
  {
    titulo: "Dengue",
    descricao: "Doença viral transmitida pelo mosquito Aedes aegypti, que pode causar febre alta, dores musculares e articulares.",
    icon: Bug,
    color: "text-red-500",
    sintomas: [
      "Febre alta",
      "Dores musculares e articulares",
      "Dor de cabeça",
      "Manchas vermelhas na pele",
      "Náuseas e vômitos"
    ],
    prevencao: [
      "Eliminar água parada",
      "Usar repelente",
      "Instalar telas nas janelas",
      "Manter caixas d'água fechadas",
      "Limpar calhas e ralos"
    ]
  },
  {
    titulo: "Chikungunya",
    descricao: "Doença viral transmitida pelo mesmo mosquito da dengue, causando febre e dores intensas nas articulações.",
    icon: Bug,
    color: "text-orange-500",
    sintomas: [
      "Febre alta",
      "Dores intensas nas articulações",
      "Dor de cabeça",
      "Manchas vermelhas na pele",
      "Fadiga"
    ],
    prevencao: [
      "Eliminar água parada",
      "Usar repelente",
      "Instalar telas nas janelas",
      "Manter caixas d'água fechadas",
      "Limpar calhas e ralos"
    ]
  },
  {
    titulo: "Zika",
    descricao: "Doença viral transmitida pelo Aedes aegypti, que pode causar microcefalia em bebês de mães infectadas.",
    icon: Bug,
    color: "text-yellow-500",
    sintomas: [
      "Febre baixa",
      "Manchas vermelhas na pele",
      "Coceira",
      "Dor de cabeça",
      "Dor nas articulações"
    ],
    prevencao: [
      "Eliminar água parada",
      "Usar repelente",
      "Instalar telas nas janelas",
      "Manter caixas d'água fechadas",
      "Limpar calhas e ralos"
    ]
  },
  {
    titulo: "Leishmaniose",
    descricao: "Doença parasitária transmitida por mosquitos flebotomíneos, que pode afetar a pele e órgãos internos.",
    icon: Bug,
    color: "text-purple-500",
    sintomas: [
      "Feridas na pele",
      "Febre",
      "Perda de peso",
      "Aumento do baço e fígado",
      "Anemia"
    ],
    prevencao: [
      "Usar repelente",
      "Instalar telas nas janelas",
      "Manter quintal limpo",
      "Evitar acúmulo de lixo",
      "Usar mosquiteiros"
    ]
  }
];

const actions = [
  {
    icon: MapPin,
    title: "Monitoramento",
    description: "Acompanhamento contínuo de áreas de risco e casos notificados",
    color: "text-blue-500"
  },
  {
    icon: Calendar,
    title: "Campanhas",
    description: "Ações educativas e preventivas em toda a comunidade",
    color: "text-green-500"
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais treinados para identificar e tratar casos",
    color: "text-purple-500"
  }
];

export default function Endemias() {
  const [cardsEndemias, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getCardEndemias();
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
        className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900 dark:text-white animate-fade-in">
            Vigilância de Endemias
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            Trabalhamos para prevenir e controlar doenças endêmicas em nossa região, 
            garantindo a saúde e bem-estar de toda a população.
          </p>
        </div>
      </motion.section>

      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>Principais Doenças Endêmicas</SectionTitle>
          <div className="grid grid-cols-1 gap-8">
            {diseases.map((disease, idx) => (
              <DiseaseCard key={idx} {...disease} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle>Nossas Ações</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actions.map((action, idx) => (
              <ActionCard key={idx} {...action} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle>Destaques das Nossas Ações</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardsEndemias.map((slide) => (
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