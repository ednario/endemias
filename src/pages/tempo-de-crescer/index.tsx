import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from "@/components/Creators";
import CardComponent from "@/components/Card";

export default function TempoDeCrescer() {
  return (
    <>
      <HeaderComponent />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 dark:text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-900 dark:text-white">
            Tempo de Crescer
          </h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Um programa da Prefeitura de Campos Sales dedicado ao desenvolvimento infantil, com atenção especial a crianças com Transtorno do Espectro Autista (TEA) e outras síndromes.
          </p>
          {/* <img
            src="/images/tempo-de-crescer/banner.jpg"
            alt="Crianças brincando no Tempo de Crescer"
            className="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
          /> */}
        </div>
      </section>

      {/* Informações principais */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-3 text-blue-900 dark:text-white">Objetivo</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Estimular o crescimento saudável das crianças por meio de atividades educativas, sensoriais e sociais,
              focando na inclusão e no desenvolvimento integral.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-3 text-blue-900 dark:text-white">Público Atendido</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Crianças até 11 anos 11 meses e 29 dias, com atenção especial a aquelas com Transtorno do Espectro Autista (TEA) e outras síndromes.
              A equipe multidisciplinar garante um ambiente seguro, lúdico e adaptado.
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-3 text-blue-900 dark:text-white">Funcionamento</h2>
            <p className="text-gray-700 dark:text-gray-300">
              De segunda a sexta-feira de acordo com o cronograma, em um espaço especialmente adaptado, com atividades planejadas e acompanhadas por profissionais capacitados.
            </p>
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section className="py-16 px-4 bg-yellow-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold mb-6">Atividades Realizadas</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              "Brincadeiras pedagógicas",
              "Atividades sensoriais",
              "Oficinas de arte e música",
              "Expressão corporal",
              "Jogos cooperativos",
              "Acompanhamento fonoaudiológico",
            ].map((atividade, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <span className="text-2xl">🎈</span>
                <p className="mt-2 text-gray-800 dark:text-white font-medium">{atividade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto e mensagem */}
      <section className="py-16 px-4 bg-blue-50 dark:bg-gray-900 dark:text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Cuidar é fazer crescer com amor</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            O Tempo de Crescer transforma a vida das nossas crianças,
            oferecendo apoio, afeto e estímulos adequados. É um espaço onde cada criança é respeitada em sua individualidade,
            desenvolvendo suas habilidades com segurança e alegria.
          </p>
        </div>
      </section>

      <CardComponent 
            cards={[
                {
                  imagem:"/images/atencao-primaria/2025-05-22.jpeg", 
                  titulo:"Aplicação de Flúor - Tempo de Crescer", 
                  descricao:"Realização de mutirão fixo com foco na aplicação de FLÚOR para todas as crianças do município."
                }
              ]
            }
            />
      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}
