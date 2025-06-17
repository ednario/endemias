import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from '@/components/Creators';
import CarouselComponent from "@/components/Carousel";
import { HeartPulse, Users, Stethoscope, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 dark:text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-blue-900 dark:text-white text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              Secretaria Municipal de Saúde
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Trabalhamos todos os dias para cuidar da saúde do nosso povo. Conheça algumas ações em destaque abaixo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <CarouselComponent/>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-12">
            Nossos Serviços
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <HeartPulse className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center text-blue-900 dark:text-white mb-3">
                Atendimento Médico
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Consultas e procedimentos médicos com profissionais qualificados
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Users className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center text-blue-900 dark:text-white mb-3">
                Saúde da Família
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Acompanhamento integral da saúde de toda a família
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Stethoscope className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center text-blue-900 dark:text-white mb-3">
                Prevenção
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Programas de prevenção e promoção da saúde
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Calendar className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center text-blue-900 dark:text-white mb-3">
                Agendamento
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Marque sua consulta de forma rápida e fácil
              </p>
            </div>
          </div>
        </div>
      </section>

      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}
