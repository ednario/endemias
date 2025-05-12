import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../components/LeafletMap"), {
  ssr: false
});

export default function Home() {
  const [formData, setFormData] = useState({ endereco: '', tipo: '', observacoes: '' });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/denuncia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setMensagem(data.message);
    setFormData({ endereco: '', tipo: '', observacoes: '' });
  };

  const [mapLocked, setMapLocked] = useState(true); 

  return (
    <>
      <Head>
        <title>Controle de Endemias - Município</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="bg-white font-semibold py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <img src="/images/logo.png" alt="logo" className="h-12" />
          <nav className="flex flex-wrap justify-center gap-3 text-sm">
            <a href="#inicio" className="hover:underline">Início</a>
            <a href="https://campossales.ce.gov.br/institucional.php" className="hover:underline">A Prefeitura</a>
            <a href="https://campossales.ce.gov.br/omunicipio.php" className="hover:underline">O Município</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="bg-gray-100 py-12 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Juntos contra as endemias</h2>
          <p className="mb-4">Sua informação é nossa prevenção!</p>
          <a href="#denuncia" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">Denuncie um foco</a>
        </div>
      </section>

      <section id="endemias" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Endemias Atuais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: "Dengue", casos: "52 casos ativos" },
              { nome: "Chikungunya", casos: "8 casos confirmados" },
              { nome: "Zika Vírus", casos: "1 caso em investigação" },
              { nome: "Leishmaniose", casos: "3 casos em área rural" }
            ].map((endemia, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded text-center">
                <h3 className="text-lg font-semibold">{endemia.nome}</h3>
                <p>{endemia.casos}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mapa" className="bg-gray-100 py-12 px-4 text-center relative">
  <div className="container mx-auto relative">
    <h2 className="text-xl font-bold mb-4">Mapa de Casos</h2>
    
    <div className="relative">
      <div className={`transition-opacity duration-300 absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm z-10 flex items-center justify-center sm:hidden ${!mapLocked ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button
          onClick={() => setMapLocked(false)}
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Ativar Mapa
        </button>
      </div>

      <div className={`${mapLocked ? 'pointer-events-none' : ''}`}>
        <MapComponent />
      </div>
    </div>
  </div>
</section>

      <section id="denuncia" className="py-12 px-4">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-xl font-bold mb-4 text-center">Denuncie um Foco</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="endereco" value={formData.endereco} onChange={handleChange} type="text" placeholder="Endereço do foco" className="w-full p-2 border rounded" required />
            <select name="tipo" value={formData.tipo} onChange={handleChange} className="w-full p-2 border rounded" required>
              <option value="">Tipo de foco</option>
              <option value="agua">Água parada</option>
              <option value="lixo">Lixo acumulado</option>
            </select>
            <textarea name="observacoes" value={formData.observacoes} onChange={handleChange} placeholder="Observações adicionais" className="w-full p-2 border rounded" />
            <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">Enviar</button>
          </form>
          {mensagem && <p className="mt-4 text-green-600">{mensagem}</p>}
        </div>
      </section>

      <section id="equipe" className="bg-gray-200 py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">Equipe Responsável</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: "Moésio Loiola", cargo: "Prefeito", foto: "/images/Moésio.jfif" },
              { nome: "Morgana Kelly", cargo: "Secretária de Saúde", foto: "/images/Morgana.jpg" },
              { nome: "Cicero Rai", cargo: "Coordenador de Endemias", foto: "/images" },
              { nome: "Ednario Andrade", cargo: "Analista e Desenvolvedor de Sistemas", foto: "/images/Ednario.jfif" }
            ].map((pessoa, idx) => (
              <div key={idx} className="bg-white rounded shadow p-4 text-center">
                <img src={pessoa.foto} alt={pessoa.nome} className="mx-auto mb-2 rounded-full h-24 w-24 object-cover" />
                <h3 className="text-lg font-semibold">{pessoa.nome}</h3>
                <p>{pessoa.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-6 px-4 text-sm">
        <div className="container mx-auto text-center space-y-1">
          <p>Prefeito Moesio Loiola de Melo</p>
          <p>CNPJ: 07.416.704/0001-99</p>
          <p>Contato: (88) 3533-1666 | gabinete@campossales.ce.gov.br</p>
          <p>Endereço: Travessa Sul, 440 - Centro, 63.150-000</p>
          <p>Horário: Segunda a Sexta das 08:00h às 12:00h</p>
        </div>
      </footer>
    </>
  );
}
