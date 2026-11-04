"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, Leaf, ShoppingCart, Recycle } from "lucide-react";
import { ItemCarrinho } from "@/app/types"; // Ajusta o caminho se necessário
import { carrinhoMock } from "@/app/date/mocks";

export default function CarrinhoPage() {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulação da chamada à API do Spring Boot
  useEffect(() => {
    setTimeout(() => {
      setItens(carrinhoMock);
      setIsLoading(false);
    }, 500); // 500ms de delay para simular a rede
  }, []);

  // Função para alterar a quantidade
  const alterarQuantidade = (id: number, delta: number) => {
    setItens((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const novaQtd = Math.max(1, item.quantidade + delta);
          return { ...item, quantidade: novaQtd };
        }
        return item;
      }),
    );
  };

  // Função para remover item
  const removerItem = (id: number) => {
    setItens((prev) => prev.filter((item) => item.id !== id));
  };

  // Cálculos do Resumo
  const subtotal = itens.reduce(
    (acc, item) => acc + item.precoUnitaio * item.quantidade,
    0,
  );
  const taxaEnvio = itens.length > 0 ? 1500 : 0;
  const total = subtotal + taxaEnvio;

  // Formatador de moeda (Kwanza)
  const formatarKz = (valor: number) => {
    return valor.toLocaleString("pt-AO").replace(/,/g, " ") + " Kz";
  };

  if (isLoading) {
    return (
      <div className="pt-32 min-h-screen flex justify-center text-zinc-500">
        A carregar o carrinho...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-1">
          <h1 className="text-zinc-800 font-bold text-4xl ">Meu carrinho</h1>
          <p className="text-zinc-500 leadding-relaxed ">
            {itens.length} {itens.length === 0 ? "produto" : "produtos"}
          </p>
        </div>
        {itens.length === 0 ? (
          <div className="bg-white border border-zinc-200 rounded-2xl p-4 mt-4 gap-6 flex flex-col justify-center items-center">
            <ShoppingCart size={40} className="fill-green-800" />
            <span className="text-zinc-700 text-xl">
              O teu carrinho está vazio.
            </span>
            <Link href={"/productos"}>
              <button className="px-6 py-4 bg-gradient-to-tr from-green-700 via-amber-600 to-green-700 text-white font-semibold rounded-lg cursor-pointer hover:scale-105 transition-transform ease-in-out">
                Explorar produtos
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-4">
            <div className="lg:col-span-2 space-y-4">
              {itens.map((item) => (
                <div
                  key={item.id}
                  className=" border border-zinc-200 rounded-xl p-4 flex shadow-sm hover:shadow-md transition-shadow gap-4"
                >
                  <div className="relative w-28 h-28 shrink-0 bg-zinc-100 rounded-xl overflow-hidden">
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <div className="flex gap-2 items-start justify-between">
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-zinc-900">
                          {item.nome}
                        </h3>
                        <span className="text-zinc-600 text-xs">
                          {item.vendedor} . {item.local}
                        </span>
                        <span className="bg-green-100 rounded-full px-2 py-0.5 mt-1 text-sm inline-flex text-green-700 gap-1 justify-center font-semibold text-[12px] items-center">
                          <Recycle size={14} className="text-green-900" />{" "}
                          {item.categoria}
                        </span>
                      </div>
                      <button
                        onClick={() => removerItem(item.id)}
                        title="Remover item"
                        className=" text-zinc-500 hover:text-red-500"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="flex justify-between gap-2 items-end">
                      <div className="py-1 px-2 rounded-xl gap-2 border border-zinc-200 mt-2">
                        <button
                          className="text-zinc-700  px-2 py-1"
                          onClick={() => alterarQuantidade(item.id, -1)}
                        >
                          <Minus size={12} />
                        </button>
                        {item.quantidade}
                        <button
                          className="text-zinc-700 px-2 py-1"
                          onClick={() => alterarQuantidade(item.id, +1)}
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className=" font-semibold text-green-600">
                        {formatarKz(item.precoUnitaio * item.quantidade)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <aside className="bg-white border border-zinc-200 rounded-xl sticky px-4 py-2 ">
              <h2 className="font-semibold text-zinc-900 text-xl mt-2">
                Resumo
              </h2>
              <div className="gap-2">
                <div className="flex justify-between gap-2 text-zinc-500 mt-2">
                  <span className="mt-2">Subtotal</span>
                  <span className="">{formatarKz(subtotal)}</span>
                </div>
                <div className="flex justify-between gap-2 text-zinc-500 mt-1">
                  <span className="text-zinc-600">Taxa envio</span>
                  <span className="text-zinc-600">{formatarKz(taxaEnvio)}</span>
                </div>
                <hr className="text-zinc-200 mt-3" />
                <div className="flex justify-between gap-2 text-zinc-500 mt-2">
                  <span className="text-zinc-700 text-xl font-semibold">
                    Total
                  </span>
                  <span className="text-green-700 text-2xl">
                    {formatarKz(total)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-2 gap-2">
                <button className="bg-green-800 rounded-lg w-full px-4 py-3 text-white font-semibold cursor-pointer  hover:bg-green-900">
                  Finalizar compra
                </button>
                <Link href={"/productos"}>
                  <button className="px-4 py-3 w-full rounded-lg border border-zinc-200 text-zinc-600 font-semibold hover:bg-green-50 cursor-pointer">
                    Continuar a comprar
                  </button>
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
