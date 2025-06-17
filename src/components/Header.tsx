/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Home, Shield, Stethoscope, Users, Baby } from "lucide-react";
import { usePathname } from "next/navigation";

export default function HeaderComponent() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/vigilancia", label: "Vigilância em Saúde", icon: Shield },
    { href: "/atencao-primaria", label: "Atenção Primária", icon: Stethoscope },
    { href: "/emulti", label: "EMULTI", icon: Users },
    { href: "/tempo-de-crescer", label: "Tempo de Crescer", icon: Baby },
  ];

  return (
    <>
      <Head>
        <title>Secretaria de Saúde - Campos Sales</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header 
        className={`fixed w-full transition-all duration-300 ${
          scrolled 
            ? "bg-blue-900/95 backdrop-blur-sm shadow-lg" 
            : "bg-blue-900"
        } text-white dark:bg-gray-800/95 p-2 sm:p-0 z-50`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <img 
              src="/images/logosec.png" 
              alt="Secretaria de Saúde de Campos Sales" 
              className="h-12 sm:h-16 object-contain" 
            />
          </Link>

          <button 
            onClick={() => setMenuAberto(!menuAberto)} 
            className="sm:hidden p-2 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
            aria-label="Menu"
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden sm:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-800 dark:bg-gray-700 text-white"
                      : "hover:bg-blue-800/50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <Icon size={18} className="hidden sm:block" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <div className="absolute right-0 top-full bg-blue-900 dark:bg-gray-800 text-white w-64 flex flex-col py-2 px-4 sm:hidden shadow-xl rounded-b-2xl border-t border-blue-800 dark:border-gray-700">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuAberto(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-800 dark:bg-gray-700 text-white"
                      : "hover:bg-blue-800/50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </header>
      {/* Espaçador para compensar o header fixo */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
}
