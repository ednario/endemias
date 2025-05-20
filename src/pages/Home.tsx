import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from '@/components/Creators';
import CarouselComponent from "@/components/Carousel";

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      <section className="py-12 px-4 bg-gray-100 dark:bg-gray-900 dark:text-white text-center">
        <h1 className="text-1xl sm:text-3xl font-bold mb-6">Secretaria Municipal de Saúde</h1>
        <p className="mb-8 max-w-2xl mx-auto">Trabalhamos todos os dias para cuidar da saúde do nosso povo. Conheça algumas ações em destaque abaixo.</p>

        <div className="max-w-3xl mx-auto">
        <CarouselComponent
          acoes={[
            {
              imagem: '/images/carousel/001.jpeg',
              titulo: 'Campanha de Vacinação',
              descricao: 'Mais de 2000 pessoas vacinadas na última semana.'
            },
            {
              imagem: '/images/carousel/002.jpeg',
              titulo: 'Atendimento Domiciliar',
              descricao: 'Equipe da saúde visitou mais de 150 residências.'
            },
            {
              imagem: '/images/carousel/003.jpeg',
              titulo: 'Campanha de Vacinação',
              descricao: 'Mais de 2000 pessoas vacinadas na última semana.'
            },{
              imagem: '/images/carousel/004.jpeg',
              titulo: 'Campanha de Vacinação',
              descricao: 'Mais de 2000 pessoas vacinadas na última semana.'
            },{
              imagem: '/images/carousel/005.jpeg',
              titulo: 'Campanha de Vacinação',
              descricao: 'Mais de 2000 pessoas vacinadas na última semana.'
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
