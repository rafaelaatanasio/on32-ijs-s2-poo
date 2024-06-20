import { Produto } from "./produto";

export class ProdutoVariante extends Produto { // classe filha/derivada de Produto
  public imagens: string[] = []; // s3
  public categorias: string[] = ['regata']
  dimensoes: any = {};
  
  constructor( // produto para ser instanciando precisa dessas informações
    public nome: string,
    public preco: number,
    protected _descricao: string, // _ protected visível para classe mãe/pai / hierarquia
    public cor: string
  ) {
    super(nome, preco, _descricao); // repassando as informações para a classe mãe pra poder instanciar
  }

  // mas sim, isso é um override = sobrescrita
  get descricao(): string { // método
    console.log('Classe filha')
    return `
      O produto: ${this.nome}, com a cor ${this.cor} 
      com os tamnhos x, y, z 
      categorias ${this.categorias.join(', ')}
      ${this._descricao}
    `
  }
}

// .join separa por categoria