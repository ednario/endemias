/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <>
    <Head>
        <title>Secretaria de Saúde - Campos Sales</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-blue-900 text-white dark:bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/images/logobranca.png" alt="Prefeitura de Campos Sales" className="h-10" />
          <nav className="space-x-4 text-sm">
            <Link href="/">Início</Link>
            <Link href="/secretaria/vigilancia/endemias" >Endemias</Link>
          </nav>
        </div>
      </header>
    </>
  );
}