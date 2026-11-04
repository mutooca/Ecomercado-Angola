"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart, ShoppingCart, Search, Leaf } from "lucide-react";

export default function Header() {
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Vendedores", href: "/vendedores" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contactos", href: "/contactos" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-green-700 text-sm text-white">
        <div className="flex justify-between max-w-7xl mx-auto items-center px-4 py-2">
          <p className="hidden sm:flex">
            🌱 Trasformando resíduos em oportunidades
          </p>

          <div className="flex gap-4 items-center ml-auto">
            <Link href={"/login"} className="hover:text-green-500 transition">
              Entrar
            </Link>
            <Link
              href={"/registar"}
              className="hover:text-green-500 transition"
            >
              Registar
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl px-4 py-4 flex justify-between items-center gap-4 mx-auto">
        <Link href={"/"} className="flex items-center gap-2">
          <div className="rounded-full p-2 bg-green-700">
            <Leaf className="w-5 h-5 text-white " />
          </div>

          <span className="font-bold text-xl text-zinc-800">
            Eco
            <span className="text-green-700">Mercado</span>
          </span>
        </Link>
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="absolute text-zinc-400 left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
            <input
              type="text"
              placeholder="Pesquisar Productos recicláveis"
              className="w-full pl-10 pr-4 py-2 border border-zinc-400 rounded-full outline-green-700"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={"/favoritos"}
            className="hidden md:flex rounded-full p-2 hover:bg-zinc-100 transition"
          >
            <Heart className="w-6 h-6 text-gray-500" />
          </Link>
          <Link
            href={"/carrinho"}
            className="sm:mr-10 relative p-2 rounded-full hover:bg-zinc-100 transition"
          >
            <ShoppingCart className="w-6 h-6 text-gray-500" />
            <span className="absolute p-2 w-5 h-5 -top-1 -right-2 text-xs rounded-full bg-amber-600 flex justify-center items-center text-white">
              2
            </span>
          </Link>
        </div>
        {/* Menu Android*/}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 cursor-pointer rounded-full hover:bg-zinc-100 transform"
        >
          {" "}
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-500" />
          ) : (
            <Menu className="w-6 h-6 text-gray-500" />
          )}
        </button>
      </div>
      <nav className="hidden md:block bg-[#F5F5F5] border-t border-gray-200">
        <div className="max-w-7xl p-4 py-3 mx-auto flex items-center gap-8 ">
          {navLinks.map((link) => (
            <ul key={link.name}>
              <li>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-green-700 transition"
                >
                  {link.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </nav>
      {menuOpen && (
        <nav className="md:hidden bg-[#F5F5F5] border-t border-gray-200">
          <div className=" px-4 py-4 flex flex-col gap-2 ">
            {navLinks.map((link) => (
              <ul key={link.name} onClick={() => setMenuOpen(false)}>
                <li>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-green-700 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
