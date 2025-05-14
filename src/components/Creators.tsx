/* eslint-disable @next/next/no-img-element */
export default function CreatorsComponent() {
    return (
      <>
      <section id="equipe" className="bg-gray-200 dark:bg-gray-900 dark:text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">Equipe Responsável</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: "Moésio Loiola", cargo: "Prefeito", foto: "/images/Moésio.jfif" },
              { nome: "Morgana Kelly", cargo: "Secretária de Saúde", foto: "/images/Morgana.jpg" },
              { nome: "Cicero Rai", cargo: "Coordenador de Endemias", foto: "/images" },
              { nome: "Ednario Andrade", cargo: "Analista e Desenvolvedor de Sistemas", foto: "/images/Ednario.jfif" }
            ].map((pessoa, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 dark:text-white rounded shadow p-4 text-center">
                <img src={pessoa.foto} alt={pessoa.nome} className="mx-auto mb-2 rounded-full h-24 w-24 object-cover" />
                <h3 className="text-lg font-semibold">{pessoa.nome}</h3>
                <p>{pessoa.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    );
  }