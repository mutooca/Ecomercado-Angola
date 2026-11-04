import {
  Leaf,
  ArrowRight,
  MapPin,
  Star,
  Heart,
  Recycle,
  Truck,
  ShieldCheck,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import fundo from "../../public/img/principal.jpg";

export default function Home() {
  const provincias = [
    "Luanda",
    "Benguela",
    "Huíla",
    "Huambo",
    "Cabinda",
    "Namibe",
    "Malanje",
    "Bié",
    "Uíge",
    "Zaire",
    "Cunene",
    "Moxico",
  ];

  const categorias = [
    { nome: "Decoração", slug: "decoracao", imagem: "/img/decoracao.jpg" },
    { nome: "Moda & Acessórios", slug: "moda", imagem: "/img/moda.jpg" },
    { nome: "Utilidades", slug: "utilidades", imagem: "/img/utilidades.jpg" },
    { nome: "Arte", slug: "arte", imagem: "/img/arte.jpg" },
    { nome: "Mobiliário", slug: "mobiliario", imagem: "/img/mobiliario.jpg" },
    { nome: "Papelaria", slug: "papelaria", imagem: "/img/papelaria.jpg" },
  ];

  const productos = [
    {
      id: 1,
      nome: "Vaso de vidro reciclado",
      vendedor: "Coperativa Kilamba",
      local: "Luanda",
      preco: "4 500 ks",
      nota: 4.8,
      categoria: "Vidro reciclado",
      imagem: "/img/Vaso.jpg",
    },
    {
      id: 2,
      nome: "Cesto tecido em retalhos",
      vendedor: "Ateliê Kianda",
      local: "Benguela",
      preco: "6 200 kz",
      categoria: "Tecidos reaproveitados",
      nota: 4.9,
      imagem: "/img/Cesto.jpg",
    },
    {
      id: 3,
      nome: "Relógio de parede em madeira reutilizada",
      vendedor: "Marcenária escolar",
      local: "Huambo",
      preco: "12 800 kz",
      nota: 4.7,
      categoria: "Madeira de paletes",
      imagem: "/img/relogio.jpg",
    },
    {
      id: 4,
      nome: "Bolsa em borracha de pneu",
      vendedor: "ReUso Angola",
      local: "Luanda",
      preco: "8 900 Kz",
      nota: 4.6,
      categoria: "Pneus reciclados",
      imagem: "/img/bolsas.jpg",
    },
  ];
  return (
    <div className="min-h-screen ">
      <section className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto px-8 py-12 sm:py-20 items-center mb-4">
        <div>
          <span className="px-2 py-1 text-xs rounded-full bg-[#2E7D32]/10 inline-flex items-center gap-2 text-green-700">
            <Leaf className=" w-4 h-4" />
            Ecosistema circular . Feito em Angola
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Transformando <br />{" "}
            <span className="text-green-700">resíduos</span> em <br />
            <span className="text-amber-600 italic font-serif">
              Oportunidades
            </span>
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-md mt-6">
            Descubra produtos sustentáveis criados por cooperativas e pequenas
            empresas angolanas a partir de materiais recicláveis.
          </p>

          <div className="flex items-center gap-4 mt-8 ">
            <Link href={"/productos"}>
              <button className="flex items-center gap-2 font-semibold text-white  px-8 py-4 cursor-pointer bg-green-700 rounded-md hover:bg-green-800 transition hover:shadow-md">
                Ver Productos
                <ArrowRight size={22} />
              </button>
            </Link>
            <Link href={"/registar"}>
              <button className="px-6 py-4 rounded-lg border-2 border-gray-200 font-semibold  cursor-pointer text-zinc-700 hover:bg-green-50 transition">
                Vender no EcoMercado
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 mt-8">
            <div>
              <p className="font-bold text-zinc-400 tracking-widest text-xs">
                VENDEDORES
              </p>
              <p className="text-zinc-900 text-2xl font-black ">180+</p>
            </div>
            <div>
              <p className="font-bold text-zinc-400 tracking-widest text-xs">
                Províncias
              </p>
              <p className="text-zinc-900 text-2xl font-black">18</p>
            </div>
            <div>
              <p className="font-bold text-zinc-400 tracking-widest text-xs">
                KG RECICLADOS
              </p>
              <p className="text-zinc-900  text-2xl font-black">4.7t</p>
            </div>
          </div>
        </div>

        <div className="relative  ">
          <div className="relative  overflow-hidden shadow-2xl rounded-2xl bg-green-200 aspect-[4/3]  px-4 py-4">
            <Image
              src={fundo}
              fill
              priority
              alt="imagem principal de Bidons recicláveis"
            />
          </div>
          <div className="absolute inset-0 overflow-hidden bg-black/0 hover:bg-black/50 transition-tansform duration-200 cursor-pointer italic font-serif rounded-2xl"></div>
          <div className="absolute left-4 md:left-8 -bottom-6  rounded-2xl p-4 flex items-center mx-auto gap-2 bg-white border border-zinc-100 shadow-md mt-2">
            <div className="p-2 rounded-full text-green-500 bg-green-100 items-center">
              <Recycle size={22} className="" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-zinc-400">
                Impacto desta semana
              </span>
              <span className="text-zinc-900 text-sm font-semibold leading-relaxed">
                +312 kg de PET reaproveitado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/*Categoria*/}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between ">
          <div>
            <h2 className="font-bold text-4xl leading-tight">Categorias</h2>
            <p className="text-zinc-500 leading-relaxed">
              Encontre o que procura, feito com propósito.
            </p>
          </div>
          <Link
            href={"/productos"}
            className="text-sm text-green-700  font-semibold flex items-center gap-1 hover:underline transform"
          >
            Ver todas <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          {categorias.map((cat) => (
            <Link
              key={cat.nome}
              href={` /categorias/${cat.slug}`}
              className="bg-white border border-zinc-200 rounded-t-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group-hover:border-green-500 shadow-md"
            >
              <div className="aspect-square relative overflow-hidden bg-zinc-100 rounded-t-full">
                <Image
                  src={cat.imagem}
                  alt={cat.nome}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out "
                />

                <div
                  className="pointer-events-none absolute inset-0
                 -translate-x-full group-hover:translate-x-full  transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
              </div>
              <div className="px-3 py-3 text-center">
                <span className="font-semibold text-zinc-900 text-sm hover:text-green-700 transition-colors">
                  {cat.nome}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/*Productos em destaque*/}
      <section className="max-w-7xl mx-auto py-16">
        <div>
          <h2 className="font-bold text-4xl leading-tight tracking-tight">
            Produtos em destaque
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed font-normal">
            Selecionados pela comunidade EcoMercado.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productos.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl transform group flex flex-col cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-100">
                  <Image
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width:1024px), 33vw, 20vw"
                    src={p.imagem}
                    alt={p.nome}
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  />

                  <span className="absolute bg-white/90 text-xs font-semibold text-green-700 px-2 py-1 top-3 left-3 inline-flex gap-2 items-center rounded-full z-10">
                    <Leaf size={16} /> {p.categoria}
                  </span>

                  <button className=" absolute bg-white/90 text-zinc-400 rounded-full p-2 top-3 right-3 hover:text-red-500 z-10">
                    <Heart size={16} />
                  </button>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex justify-between text-sm items-center">
                    <span className="flex items-center gap-2 text-zinc-600 ">
                      <MapPin size={10} /> {p.local}
                    </span>
                    <span className="flex items-center gap-2 text-zinc-500 ">
                      <Star
                        size={16}
                        className="fill-[#F57C00] text-[#F57C00]"
                      />{" "}
                      {p.nota}
                    </span>
                  </div>

                  <h2 className="font-bold text-xl text-zinc-700">{p.nome}</h2>
                  <p className="text-zinc-400 text-sm font-normal">
                    {p.vendedor}
                  </p>

                  <div className="flex justify-between mt-4">
                    <span className="text-xl font-semibold text-green-700">
                      {p.preco}
                    </span>
                    <Link
                      href={"/productos"}
                      className="flex items-center gap-1 text-amber-600 hover:underline"
                    >
                      ver detalhes <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto  items-center px-8 py-8 bg-gradient-to-b shadow-md from-green-100/70 to-green-50/50 border border-zinc-300  rounded-2xl ">
        <h2 className="text-4xl font-black font-serif leading-tight tracking-tight italic mt-4">
          Como funciona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mt-10">
          <div className="max-w-md">
            <div className="inline-flex p-3 rounded-lg bg-green-700 items-center text-white">
              <Leaf size={22} />
            </div>
            <div className="mt-4">
              <p className="font-black text-sm ">1. Descubra</p>
              <span className="text-zinc-500 leading-relaxed">
                Explore produtos sustentáveis por categoria, província ou
                material.
              </span>
            </div>
          </div>

          <div className=" max-w-md">
            <div className=" inline-flex p-3 rounded-lg bg-green-700 items-center text-white">
              <ShieldCheck size={22} />
            </div>
            <div className="mt-4">
              <p className="font-black text-">2. Compre com segurança</p>
              <span className="text-zinc-500 leading-relaxed">
                Vendedores verificados e pagamentos protegidos.
              </span>
            </div>
          </div>

          <div className=" max-w-md">
            <div className="inline-flex p-3 rounded-lg bg-green-700 items-center text-white">
              <Truck size={20} />
            </div>
            <div className="mt-4">
              <p className="font-black text-sm">3.Receba em casa</p>
              <span className="text-zinc-500 leading-relaxed">
                Acompanhe a sua encomenda em tempo real até à sua província.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 mx-auto items-center mt-12 max-w-7xl px-8 ">
        <div>
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-xs font-bold text-green-700 gap-2 mb-2">
            <MapPin size={12} /> Mapa de vendedores
          </span>
          <h2 className="font-bold text-3xl">
            Vendedores em todas as províncias de <br />
            Angola
          </h2>

          <p className="leading-relaxed text-gray-600 mt-4 ">
            De Cabinda ao Cunene, ligamos consumidores a produtores que dão nova
            vida <br /> a materiais recicláveis. Filtre por localização e apoie
            a economia local.
          </p>

          <Link href="/vendedores" className="flex mt-6">
            {" "}
            <button className="px-6 py-3 rounded-md bg-green-700 text-white font-semibold hover:bg-green-800 hover:scale-110 transition-transform duration-500 ease-in">
              Ver Vendedores
            </button>
          </Link>
        </div>

        <div className="mx-auto bg-white rounded-lg border border-gray-200 px-6 py-4">
          <div className="grid grid-cols-4 gap-2">
            {provincias.map((prov) => (
              <button
                key={prov}
                className="px-8 py-3 rounded-lg border bg-zinc-100 border-zinc-200 font-semiboldbold text-xs text-zinc-900"
              >
                {prov}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
