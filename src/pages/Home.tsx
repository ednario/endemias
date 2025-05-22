import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from '@/components/Creators';
import CarouselComponent from "@/components/Carousel";

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      <section className="py-12 px-4 bg-gray-100 dark:bg-gray-900 dark:text-white text-center">
        <h1 className="text-blue-900 dark:text-white text-2xl sm:text-3xl font-bold mb-6">Secretaria Municipal de Saúde</h1>
        <p className="mb-8 max-w-2xl mx-auto">Trabalhamos todos os dias para cuidar da saúde do nosso povo. Conheça algumas ações em destaque abaixo.</p>

        <div className="max-w-3xl mx-auto">
        <CarouselComponent
          acoes={[
            {
            imagem:"/images/atencao-primaria/2025-05-22.jpeg", 
            titulo:"Aplicação de Flúor - Tempo de Crescer", 
            descricao:"Realização de mutirão fixo com foco na aplicação de FLÚOR para todas as crianças do município."
            },
            {
              imagem: '/images/atencao-primaria/vacinacao001.jpeg',
              titulo: 'Vacinação contra a gripe liberada!!!',
              descricao: 'Em todos os postos de saúde da cidade.'
            }
          ]}
      />
      </div>
      </section>
      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}
