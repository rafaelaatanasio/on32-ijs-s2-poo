import { ProdutoTipoEnum } from "./enums/produto-tipo.enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";

// verbosa - insiria as informacoes de forma granular / aos poucos
// abreviada - insere as informcoes direto
/*
export class Produto implements ProdutoInterface {
  nome: string;
  preco: number;
  descricao: string;

  constructor(nome: string, preco: number, descricao: string) { // new 
    this.nome = nome
    this.preco = preco
    this.descricao = descricao
  }
}
*/

/**
 * public -> qualquer um pode acessar filho, ou partir de uma variavel
 * proteced -> somente a classe e suas classes derivadas ( extends ) pode acessar
 * private -> somente a classe pode acessar
 *  private | proteced | public getStatus() - método de status de um carrinho
 *  private | proteced | public status - propriedade
 *  readonly - apenas ler
 */

export class Produto implements ProdutoInterface {
  protected estoque: number = 0; // estava na variante
  public estaDisponivel(): boolean {
    return this.estoque > 0 // mostrando que está disponível
  }

  public tipo: ProdutoTipoEnum = ProdutoTipoEnum.FISICO; 
  public get descricao(): string {
    return this._descricao
  }
  
  // public get descricao: string são equivalentes, inclusive no constructor

  constructor(public nome: string, public preco: number, protected _descricao: string) {}
 }

