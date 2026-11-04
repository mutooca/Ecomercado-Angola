import { Leaf } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-zinc-200 pt-16 pb-4 mt-16 bg-green-100/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row justify-between pb-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-full p-3 bg-green-700 text-white">
                <Leaf size={22} />
              </div>
              <span className="text-xl font-semibold">EcoMercado Angola</span>
            </div>

            <p className="text-zinc-600 leading-relaxed max-w-md">
              Transformando resíduos em <br /> oportunidades. Uma plataforma
              para <br />
              economia circular em Angola.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Explorar</h3>
            <ul className="flex flex-col text-zinc-600">
              <li>
                <Link
                  href={"/productos"}
                  className="hover:text-green-700 trnasform "
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href={"/vendedores"}
                  className="hover:text-green-500 trnasform"
                >
                  Vendedores
                </Link>
              </li>
              <li>
                <Link
                  href={"/sobre"}
                  className="hover:text-green-500 trnasform"
                >
                  Sobre o Projecto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-zinc-600">
            <h3 className="font-semibold text-black">Contactos</h3>

            <div>
              <p>Luanda, Angola</p>
              <p>ecomercado12@gmail.com</p>
              <p>Sobre o Projecto</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 border-t border-zinc-200  text-center text-zinc-500 text-sm">
        <p>
          {" "}
          © {currentYear} EcoMercado Angola-Transformando resíduos em
          oportunidades
        </p>
      </div>
    </footer>
  );
}
