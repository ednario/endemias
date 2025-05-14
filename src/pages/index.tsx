/* eslint-disable @next/next/no-img-element */
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

  return (
    <>
      <Head>
        <title>Controle de Endemias - Município</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-blue-900 text-white dark:bg-gray-800 pb-3 sm:pb-0">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <img src="/images/logobranca.png" alt="Prefeitura de Campos Sales" className="h-10 my-2 sm:h-13" />
          <nav className="flex flex-wrap justify-center gap-3 text-sm">
            <a href="#inicio" className="hover:underline">Início</a>
            <a href="https://campossales.ce.gov.br/institucional.php" className="hover:underline">A Prefeitura</a>
            <a href="https://campossales.ce.gov.br/omunicipio.php" className="hover:underline">O Município</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="bg-gray-100 dark:bg-gray-900 dark:text-white py-12 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Juntos contra as endemias</h2>
          <p className="mb-4">Sua informação é nossa prevenção!</p>
          <a href="#denuncia" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">Denuncie um foco</a>
        </div>
      </section>

      <section id="endemias" className="py-12 px-4 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Endemias Atuais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: "Dengue", casos: "52 casos ativos" },
              { nome: "Chikungunya", casos: "8 casos confirmados" },
              { nome: "Zika Vírus", casos: "1 caso em investigação" },
              { nome: "Leishmaniose", casos: "3 casos em área rural" }
            ].map((endemia, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 dark:text-white shadow-md p-4 rounded text-center">
                <h3 className="text-lg font-semibold">{endemia.nome}</h3>
                <p>{endemia.casos}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mapa" className="bg-gray-100 dark:bg-gray-900 dark:text-white py-12 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-4">Mapa de Casos</h2>
          <MapComponent />
        </div>
      </section>

      <section id="denuncia" className="py-12 px-4 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-xl font-bold mb-4 text-center">Denuncie um Foco</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="endereco" value={formData.endereco} onChange={handleChange} type="text" placeholder="Endereço do foco" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
            <select name="tipo" value={formData.tipo} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" required>
              <option value="">Tipo de foco</option>
              <option value="agua">Água parada</option>
              <option value="lixo">Lixo acumulado</option>
            </select>
            <textarea name="observacoes" value={formData.observacoes} onChange={handleChange} placeholder="Observações adicionais" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">Enviar</button>
          </form>
          {mensagem && <p className="mt-4 text-green-600 dark:text-green-400">{mensagem}</p>}
        </div>
      </section>

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
      <footer id="contato" className="bg-blue-900 dark:bg-gray-800 text-white py-6 px-4 text-sm">
        <div className="container mx-auto text-center space-y-1">
            <p className="mb-2">Horário:</p>
            <p>Segunda a Quinta:</p>
            <p>Manhã: Segunda a Quinta das 07:30h às 11:30h</p>
            <p>Tarde: 13:30h às 17:00h</p>
            <p>Sexta: das 08:00h às 12:00h</p>
        </div>
        <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"/>
        <div className="container mx-auto text-center space-y-1">
          <p>Secretaria Morgana Kelly</p>
          <p>Contato: saudecampossalesce@gmail.com</p>
          <p>Endereço: Bárbara Pereira de Alencar, 652 - Centro, 63.150-000</p>
        </div>
      </footer>
    </>
  );
}