import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import Link from "next/link";
import CreatorsComponent from "@/components/Creators";

export default function VigilanciaSaude() {
  const cards = [
    {
      titulo: "Vigilância Epidemiológica",
      descricao: "Monitora doenças que podem afetar a população, como dengue, gripe e COVID-19, ajudando a prevenir e controlar surtos."
    },
    {
      titulo: "Vigilância Sanitária",
      descricao: "Cuida da segurança de alimentos, medicamentos e produtos que usamos no dia a dia, garantindo que eles não façam mal à nossa saúde."
    },
    {
      titulo: "Vigilância Ambiental",
      descricao: "Atua na área ambiental acompanhando o impacto do meio ambiente na nossa saúde, como a qualidade da água e do ar."
    },
    {
      titulo: "Vigilância em Saúde do Trabalhador",
      descricao: "Protege a saúde de quem trabalha, prevenindo acidentes e doenças causadas pelo ambiente de trabalho."
    }
  ];

  return (
    <>
      <HeaderComponent />

      <section className="py-12 px-4 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Vigilância em Saúde</h1>
          <p className="mb-8">
            A Vigilância em Saúde atua para proteger e promover a saúde da população, monitorando riscos e prevenindo doenças.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 text-left"
              >
                <h2 className="text-xl font-semibold mb-2">{card.titulo}</h2>
                <p className="text-sm">{card.descricao}</p>
              </div>
            ))}
          </div>

          <Link
            href="/vigilancia/endemias"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Ver Endemias
          </Link>
        </div>
      </section>
      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}