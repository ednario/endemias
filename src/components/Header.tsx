/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HeaderComponent() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <Head>
        <title>Secretaria de Saúde - Campos Sales</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-blue-900 text-white dark:bg-gray-800 p-2 sm:p-0 relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/images/logosec.png" alt="Secretaria de Saúde de Campos Sales" className="h-15 sm:h-20" />
          <button onClick={() => setMenuAberto(!menuAberto)} className="sm:hidden">
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden sm:flex space-x-4 text-sm">
            <Link href="/" className="hover:underline">Início</Link>
            <Link href="/vigilancia" className="hover:underline">Vigilância em Saúde</Link>
            <Link href="/atencao-primaria" className="hover:underline">Atenção Primaria</Link>
            <Link href="/emulti" className="hover:underline">EMULTI</Link>
            <Link href="/tempo-de-crescer" className="hover:underline">Tempo de Crescer</Link>
          </nav>
        </div>
        {menuAberto && (
          <div className="absolute right-0 top-16 bg-blue-900 dark:bg-gray-800 text-white w-48 flex flex-col space-y-4 py-4 px-6 sm:hidden shadow-lg rounded-b-3xl">
            <Link className="text-center" href="/" onClick={() => setMenuAberto(false)}>Início</Link>
            <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700"/>
            <Link className="text-center" href="/vigilancia" onClick={() => setMenuAberto(false)}>Vigilância em Saúde</Link>
            <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700"/>
            <Link className="text-center" href="/atencao-primaria">Atenção Primaria</Link>
            <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700"/>
            <Link className="text-center" href="/emulti">EMULTI</Link>
            <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700"/>
            <Link className="text-center" href="/tempo-de-crescer">Tempo de Crescer</Link>
          </div>
        )}
      </header>
    </>
  );
}
