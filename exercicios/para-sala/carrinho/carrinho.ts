import { ProdutoTipoEnum } from "../produtos/enums/produto-tipo.enum";
import { ProdutoInterface } from "../produtos/interfaces/produtos.interface";
import { carrinhoProdutoInterface } from "./interfaces/carrinho-produto.interfaces";


export class Carrinho {
    // quantidade de um produto
    private carrinhoProdutos: Map<string, carrinhoProdutoInterface> = new Map()
    display(): void {
        console.table(this.carrinhoProdutos)
    }

    // está em Estoque?
    // quantidade?
    // possui estoque?
    private validacao(produto: ProdutoInterface, quantidade: number): boolean {
        if (!produto.estaDisponivel()) {
            console.error(`O produto ${produto.nome} não está disponível!`)
            return false;
        }

        if (quantidade < 0) {
            console.error(`A quantidade precisa ser maior que 0`)
            return false;
        }

        if (produto.tipo == ProdutoTipoEnum.FISICO) {
            if (produto.estoque < quantidade) {
                console.error(`A quantidade ultrapassa a quantidade de estoque`)
                return false;
            }
        }
        return true
    }

    adicionarItem(produto: ProdutoInterface, quantidade: number) {
        // if (!produto.estaDisponivel()) {
        //     console.error(`O produto ${produto.nome} não está disponível!`)
        //     return false;
        // }

        // if (quantidade < 0) {
        //     console.error(`A quantidade precisa ser maior que 0`)
        //     return false;
        // }

        // if (produto.tipo == ProdutoTipoEnum.FISICO) {
        //     if (produto.estoque < quantidade) {
        //         console.error(`A quantidade ultrapassa a quantidade de estoque`)
        //         return false;
        //     }
        // }

        if (!this.validacao(produto, quantidade)){
            return;
        }

        produto.estoque = produto.estoque - quantidade

        // produto digital e produto físico
        // produto digital não possui estoque
        // produto físico possui estoque

        const produtoCarrinho: carrinhoProdutoInterface = {
            nome: produto.nome,
            tipo: produto.tipo,
            preco: produto.preco,
            quantidade, // quando tem o mesmo nome pode omitir (Ex: quantidade: quantidade)
            descricao: produto.descricao
        }

        this.carrinhoProdutos.set(produto.nome, produtoCarrinho)
    }

    // removerItem()
    // pegarValorTotal()

}