import { Vendedor, ItemCarrinho } from "../types";

export const vendedoresMock: Vendedor[] = [
  {
    id: 1,
    letra: "C",
    nome: "Cooperativa Kilamba",
    local: "Luanda",
    productos: 1,
    avaliacao: 4.8,
  },
  {
    id: 2,
    letra: "A",
    nome: "Ateliê Kianda",
    local: "Benguela",
    productos: 2,
    avaliacao: 4.8,
  },
  {
    id: 3,
    letra: "M",
    nome: "Marcenaria Ecolar",
    local: "Huambo",
    productos: 1,
    avaliacao: 4.7,
  },
  {
    id: 4,
    letra: "R",
    nome: "ReUso Angola",
    local: "Luanda",
    productos: 2,
    avaliacao: 4.7,
  },
  {
    id: 5,
    letra: "L",
    nome: "Luz Verde",
    local: "Huíla",
    productos: 2,
    avaliacao: 4.5,
  },
  {
    id: 6,
    letra: "P",
    nome: "PapelNovo",
    local: "Luanda",
    productos: 1,
    avaliacao: 4.6,
  },
];

export const carrinhoMock: ItemCarrinho[] = [
  {
    id: 1,
    produtoId: 101,
    nome: "Vaso de vidro reciclado",
    vendedor: "Cooperativa Kilamba",
    local: " Luanda",
    categoria: " Vidro reciclado",
    precoUnitaio: 4500,
    quantidade: 1,
    imagem: "/img/cesto.jpg",
  },
  {
    id: 2,
    produtoId: 101,
    nome: "Bolsa em borracha de pneu",
    vendedor: "ReUso Angola",
    local: "Luanda",
    categoria: "Pneus reciclados",
    precoUnitaio: 8900,
    quantidade: 2,
    imagem: "/img/bolsas.jpg",
  },
];
