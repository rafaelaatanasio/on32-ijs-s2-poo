import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo.enum"
import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { Produto } from "./produtos/produto"
import { ProdutoDigtal } from "./produtos/produto-digital"
import { ProdutoVariante } from "./produtos/produto-variante"

// exercícios feitos pela profa aqui
console.log("rondando") 

// Instância de classe
const produtoDigital = new ProdutoDigtal("Codigo Limpo", 90.88, "Abordando as complexides de um software")

const produto = new Produto("Regata", 100, "com encapsulamento") //  instância de produto
const subRegataRosa = new ProdutoVariante('Regata', 110, 'modelo privavera-verao', 'rosa')
const subRegataPreta = new ProdutoVariante('Regata', 110, 'modelo rock', 'preta')


const display = (...produtos: ProdutoInterface[]) : void => { // ... parâmetros infinitos
  const carrinhoProdutos = produtos.map((produto) => { // mapeando
    return {
      nome: produto.nome,
      preco: produto.preco,
      descricao: produto.descricao,
      estaDisponivel: produto.estaDisponivel()
    }
  })
  console.table(carrinhoProdutos)
}
 
// simula no carrinho
display(produto, produtoDigital, subRegataRosa, subRegataPreta)