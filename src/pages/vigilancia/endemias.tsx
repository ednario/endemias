import CreatorsComponent from "@/components/Creators";
import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import { validarCPF } from "@/pages/api/valid_cpf";
import dynamic from "next/dynamic";
import { useState } from "react";

const MapComponent = dynamic(() => import("../../components/LeafletMap"), {
  ssr: false
});

export default function Endemias() {
  const [formData, setFormData] = useState({ endereco: '', tipo: '', observacoes: '', cpf: '' });
  const [mensagem, setMensagem] = useState<{ tipo: 'erro' | 'sucesso'; texto: string } | null>(null);
  const [interacaoMapa, setInteracaoMapa] = useState(false);
  const [imagem, setImagem] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarCPF(formData.cpf)) {
      setMensagem({ tipo: 'erro', texto: "CPF inválido." });
      return;
    }
    
    const formPayload = new FormData();
    formPayload.append("cpf", formData.cpf);
    formPayload.append("endereco", formData.endereco);
    formPayload.append("tipo", formData.tipo);
    formPayload.append("observacoes", formData.observacoes);
    if (imagem) {
      formPayload.append("imagem", imagem);
    }

    const res = await fetch('/api/denuncias', {
      method: 'POST',
      body: formPayload,
    });


    if (!res.ok) {
      const text = await res.text();
      console.error("Erro na resposta:", text);
      setMensagem({ tipo: 'erro', texto: "Erro ao enviar a denúncia." });
      return;
    }    
    
    const data = await res.json();
    setMensagem(data.message);
    setFormData({ endereco: '', tipo: '', observacoes: '', cpf: '' });
  };

  return (
    <>
      <HeaderComponent />

      <section className="py-12 px-4 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Endemias Atuais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: "Dengue", casos: "52 casos ativos" },
              { nome: "Chikungunya", casos: "8 casos confirmados" },
              { nome: "Zika Vírus", casos: "1 caso em investigação" },
              { nome: "Leishmaniose", casos: "3 casos em área rural" }
            ].map((endemia, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 shadow-md p-6 rounded text-center">
                <h3 className="text-lg font-semibold mb-2">{endemia.nome}</h3>
                <p>{endemia.casos}</p>
              </div>
            ))}
          </div>
            <p className="text-center mt-2">As informações acima são tempotarias e meramente ilustrativas</p>
        </div>
      </section>
      <section id="inicio" className="bg-gray-100 dark:bg-gray-900 dark:text-white py-12 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Juntos contra as endemias</h2>
          <p className="mb-4">Sua informação é nossa prevenção!</p>
          <a href="#denuncia" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">Denuncie um foco</a>
        </div>
      </section>

      <section id="mapa" className="bg-gray-100 dark:bg-gray-900 dark:text-white py-12 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Mapa de Casos</h2>

          <div className="relative w-full h-[400px] sm:h-[500px] rounded overflow-hidden shadow">
            {!interacaoMapa && (
              <button
                onClick={() => setInteracaoMapa(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition"
              >
                Liberar interação
              </button>
            )}
            <div className={`${!interacaoMapa ? "pointer-events-none opacity-70" : ""} w-full h-full`}>
              <MapComponent />
            </div>
          </div>
        </div>
      </section>

      <section id="denuncia" className="py-12 px-4 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Denuncie um Foco</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
          <input
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              type="text"
              placeholder="CPF"
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
            <input
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              type="text"
              placeholder="Endereço do foco"
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Tipo de foco</option>
              <option value="Água parada">Água parada</option>
              <option value="Lixo Acomulado">Lixo acumulado</option>
            </select>
            <textarea
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange}
              placeholder="Observações adicionais"
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows={4}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImagem(e.target.files?.[0] || null)}
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-800 transition-colors"
            >
              Enviar
            </button>
          </form>
          {mensagem && (
            <p
              className={`mt-4 text-center ${
                mensagem.tipo === 'erro'
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-green-600 dark:text-green-400'
              }`}
            >
              {mensagem.texto}
            </p>
          )}
        </div>
      </section>
      <CreatorsComponent />
      <FooterComponent />
    </>
  );
}
