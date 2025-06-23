import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from '@/components/Creators';
import CarouselComponent from "@/components/Carousel";
import MotionDiv from "@/components/motionComponents/AnimatedDiv";
import SectionTitle from "@/components/motionComponents/SectionTitle";
import { HeartPulse, Users, Stethoscope, Calendar } from "lucide-react";

// Componentes
const ServiceCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <Icon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-center text-blue-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-center">
      {description}
    </p>
  </MotionDiv>
);

// Dados estáticos
const services = [
  {
    icon: HeartPulse,
    title: "Atendimento Médico",
    description: "Consultas e procedimentos médicos com profissionais qualificados"
  },
  {
    icon: Users,
    title: "Saúde da Família",
    description: "Acompanhamento integral da saúde de toda a família"
  },
  {
    icon: Stethoscope,
    title: "Prevenção",
    description: "Programas de prevenção e promoção da saúde"
  },
  {
    icon: Calendar,
    title: "Agendamento",
    description: "Marque sua consulta de forma rápida e fácil"
  }
];

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      
      <MotionDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white"
      >
        <div className="container mx-auto max-w-6xl">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-blue-900 dark:text-white text-4xl sm:text-5xl font-bold mb-6">
              Secretaria Municipal de Saúde
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Trabalhamos todos os dias para cuidar da saúde do nosso povo. Conheça algumas ações em destaque abaixo.
            </p>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <CarouselComponent/>
          </MotionDiv>
        </div>
      </MotionDiv>

      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle>
            <span className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-12 block">
              Nossos Serviços
            </span>
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
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
