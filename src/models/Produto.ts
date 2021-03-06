import Tema from "./Categoria";
import Usuario from "./Usuario";

interface Produto{
    idProduto: number;
    nomeProduto: string;
    qtdProduto: number;
    valorProduto: number;
    descProduto: string;
    imgProduto: string;
    enderecoProduto: string;
    categoria?: Tema | null;
    usuario?: Usuario | null;
}

export default Produto;