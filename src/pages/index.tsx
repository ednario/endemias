import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// Importa o Leaflet apenas do lado do cliente
const MapComponent = dynamic(() => import("../components/LeafletMap"), {
  ssr: false
});

export default function Home() {
  const [formData, setFormData] = useState({ endereco: '', tipo: '', observacoes: '' });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
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

      <header className="bg-teal-700 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Controle de Endemias - Campos Sales CE</h1>
          <nav className="mt-4 space-x-4">
            <a href="#inicio" className="hover:underline">Início</a>
            <a href="#endemias" className="hover:underline">Endemias</a>
            <a href="#mapa" className="hover:underline">Mapa</a>
            <a href="#denuncia" className="hover:underline">Denunciar</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-2">Juntos contra as endemias</h2>
          <p className="mb-4">Sua informação é nossa prevenção!</p>
          <a href="#denuncia" className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-600">Denuncie um foco</a>
        </div>
      </section>

      <section id="endemias" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Endemias Atuais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: "Dengue", casos: "52 casos ativos" },
              { nome: "Chikungunya", casos: "8 casos confirmados" },
              { nome: "Zika Vírus", casos: "1 caso em investigação" },
              { nome: "Leishmaniose", casos: "3 casos em área rural" }
            ].map((endemia, index) => (
              <div key={index} className="bg-white shadow-md p-4 rounded">
                <h3 className="text-lg font-semibold">{endemia.nome}</h3>
                <p>{endemia.casos}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mapa" className="bg-gray-100 py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-4">Mapa de Casos</h2>
          <MapComponent />
        </div>
      </section>

      <section id="denuncia" className="py-12">
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
            <button type="submit" className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-600">Enviar</button>
          </form>
          {mensagem && <p className="mt-4 text-green-600">{mensagem}</p>}
        </div>
      </section>

      <footer id="contato" className="bg-teal-700 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 Prefeitura Municipal - Vigilância Sanitária</p>
          <p>Contato: (00) 1234-5678</p>
        </div>
      </footer>
    </>
  );
}
