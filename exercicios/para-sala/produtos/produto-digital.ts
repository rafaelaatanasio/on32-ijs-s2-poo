import { ProdutoTipoEnum } from "./enums/produto-tipo.enum";
import { ProdutoInterface } from "./interfaces/produtos.interface";


export class ProdutoDigtal implements ProdutoInterface { 

  estoque: number = -1; // em alguns casos o -1 é infinito/sem limitação

  public estaDisponivel(): boolean { // criando método que está na interface
    return true // sempre disponível. Não tem estoque mas tem disponibilidade
  }
   public tipo: ProdutoTipoEnum = ProdutoTipoEnum.DIGITAL;
   constructor(public nome: string, public preco: number, public descricao: string) {}
} 