import { Recycle, Star, User, Leaf } from "lucide-react";
import Link from "next/link";
export default function Sobre() {
  const vantagens = [
    {
      icon: <Recycle size={20} />,
      title: "Economia circular",
      p: " Damos nova vida a PET, madeira, tecidos, pneus e mais.",
    },
    {
      icon: <User size={20} />,
      title: "Inclusão social",
      p: "Visibilidade e renda para jovens, mulheres e cooperativas.",
    },
    {
      icon: <Star size={20} />,
      title: "Produtos únicos",
      p: "Peças feitas à mão em todas as províncias.",
    },
  ];
  return (
    <div className="pt-16">
      <section className="max-w-7xl mx-auto flex flex-col gap-2">
        <span className=" bg-green-200 rounded-2xl w-24 text-center px-2 py-1 text-green-700 font-semibold text-xs">
          Sobre nós
        </span>

        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-black">
          Uma Plataforma para uma <br />{" "}
          <span className="text-green-700"> Angola Circular</span>
        </h1>
        <p className="text-zinc-500 text-xl max-w-xl mt-4">
          O EcoMercado Angola liga cidadãos, cooperativas de reciclagem e
          pequenas empresas que produzem produtos sustentáveis ou reutilizam
          materiais recicláveis, promovendo renda, inclusão social e preservação
          do meio ambiente.
        </p>
      </section>

      <section className="max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {vantagens.map((v) => (
            <div
              key={v.title}
              className="border border-zinc-200 bg-white/90 space-y-4 p-4 rounded-2xl shadow-lg"
            >
              <div className="rounded-2xl p-3 bg-green-700 text-white inline-flex">
                {v.icon}
              </div>
              <div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-zinc-500">{v.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl mt-18">
        <div className="border border-zinc-200 bg-gradient-to-r from-green-100/60 via-green-50/70 to-green-50/20 px-8 py-4 rounded-2xl ">
          <div className="flex items-center gap-2">
            <div className="rounded-2xl p-3 bg-green-700 text-white">
              <Leaf size={22} />
            </div>
            <span className="text-2xl font-black text-zinc-800">
              Faça parte da mudança
            </span>
          </div>
          <p className="text-zinc-500 leading-relaxed text-xl mt-4 max-w-xl">
            Registe-se como vendedor e alcance clientes em toda Angola, ou
            explore o catálogo e apoie os que transformam resíduos em
            oportunidades.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Link href={"/criar conta"}>
              {" "}
              <button className="rounded-lg bg-green-700 px-8 py-3 cursor-pointer text-white font-semibold hover:shadow-xl trasition-transform duration-200  hover:bg-green-800">
                Criar Conta
              </button>
            </Link>

            <Link href={"/Productos"}>
              {" "}
              <button
                className=" border border-zinc-200 rounded-lg cursor-pointer 
             px-8 py-3"
              >
                ver Productos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
