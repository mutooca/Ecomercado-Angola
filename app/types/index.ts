export interface Vendedor {
  id: number;
  letra: string;
  nome: string;
  local: string;
  productos: number;
  avaliacao: number;
}

export interface ItemCarrinho {
  id: number;
  produtoId: 101;
  nome: string;
  vendedor: string;
  local: string;
  categoria: string;
  precoUnitaio: number;
  quantidade: number;
  imagem: string;
}
