"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";

export default function Provincias() {
  const provincias = ["Luanda", "Benguela"];
  const [selecionada, setSelecionada] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-4 gap-4">
      {provincias.map((prov) => (
        <button
          key={prov}
          onClick={() => setSelecionada(prov)}
          className={`flex items-center justify-center gap-2 border rounded-xl py-4 px-4 font-semibold transition ${
            selecionada === prov
              ? "bg-[#2E7D32] text-white border-[#2E7D32]"
              : "bg-white text-zinc-700 border-zinc-200 hover:border-[#2E7D32] hover:text-[#2E7D32]"
          }`}
        >
          <MapPin size={16} />
          {prov}
        </button>
      ))}
    </div>
  );
}
