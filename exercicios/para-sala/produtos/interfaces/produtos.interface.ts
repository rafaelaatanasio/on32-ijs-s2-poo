import { ProdutoTipoEnum } from "../enums/produto-tipo.enum";

/**
 * - usando interface
 * validar tipagem
 * polifirsmo geralemente, mas quando precisamos da instancia, 
 * precisa de um mecanimso como type para identifcar
 * ter um contrato de entrada ou saida de dados = tipagem
 */

export interface ProdutoInterface {
  descricao: string;
  preco: number;
  nome: string;
  tipo: ProdutoTipoEnum // constantes de sistema, valor fixo definido pra referenciar um código
  estoque: number
  estaDisponivel: () => boolean // ter estoque
}