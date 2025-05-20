import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import CreatorsComponent from "@/components/Creators";

export default function AtencaoPrimaria() {
  return (
    <>
      <HeaderComponent />

      <section className="py-12 px-4 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">Atenção Primária à Saúde</h1>
          <p className="mb-6">
            A Atenção Primária é a porta de entrada preferencial do SUS, promovendo saúde e prevenção de doenças
            por meio de equipes multiprofissionais nas Unidades Básicas de Saúde (UBS).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">Serviços Oferecidos</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Consultas médicas e de enfermagem</li>
                <li>Vacinação</li>
                <li>Atendimento odontológico</li>
                <li>Pré-natal e acompanhamento infantil</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">Nossas UBSs</h2>
              <p>Estamos presentes em todos os bairros da cidade. Encontre a unidade mais próxima da sua casa.</p>
              <a href="#ubs" className="inline-block mt-3 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">Ver unidades</a>
            </div>
          </div>
        </div>
      </section>

      <section id="ubs" className="py-12 px-4 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Unidades Básicas de Saúde</h2>
          <ul className="space-y-3">
            <li>UBS Centro – Rua Principal, 123</li>
            <li>UBS Vila Nova – Av. Secundária, 456</li>
            <li>UBS Bairro Alegre – Rua das Flores, 789</li>
          </ul>
        </div>
      </section>

      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}
