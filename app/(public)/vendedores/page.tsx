"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Vendedor } from "@/app/types";
import { vendedoresMock } from "@/app/date/mocks";
import { MapPin, Star } from "lucide-react";

export default function Vendedores() {
  const [vendedores, setVendedores] = useState<Vendedor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVendedores(vendedoresMock);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="pt-8">
      {isLoading ? (
        <p className="text-center text-zinc-900 font-semibold">
          A carregar Vendedores...
        </p>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div>
            <h1 className="font-semibold text-2xl md:text-4xl leading-tight">
              Vendedores verificados
            </h1>
            <p className="text-zinc-500 text-xl">
              Cooperativas, ateliês e pequenas empresas de todo o país.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {vendedores.map((v) => (
              <div
                key={v.id}
                className="border border-zinc-200 p-6 rounded-2xl hover:shadow-lg hover:bg-gray-50 transition duration-300 flex flex-col shadow-md"
              >
                <div className="flex items-center gap-2">
                  <div className="flex w-12 h-12 items-center justify-center rounded-full bg-green-700 text-center font-bold text-white">
                    {v.letra}
                  </div>
                  <div className="">
                    <h3 className="font-semibold leading-tight">{v.nome}</h3>
                    <div className="flex items-center gap-1 text-zinc-500 text-sm leading-relaxed">
                      <MapPin size={16} /> <span>{v.local}</span>
                    </div>
                  </div>
                </div>
                <hr className="text-zinc-200 my-4" />

                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <span className="text-zinc-500 text-sm">Productos</span>
                    <p className="text-zinc-500 text-sm">{v.productos}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-sm">Avaliação</span>
                    <div className="flex items-center gap-2 ">
                      <Star
                        size={18}
                        className="fill-amber-600 text-amber-600"
                      />
                      <p className="text-zinc-500 text-sm">{v.avaliacao}</p>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/productos ${v.id}`}
                  className="w-full mt-auto block border rounded-xl border-zinc-200 text-center cursor-pointer p-2.5 tesxt-sm hover:bg-zinc-50 hover:border-zinc-300"
                >
                  Ver loja
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
