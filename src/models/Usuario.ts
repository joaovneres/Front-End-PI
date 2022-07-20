import Produto from "./Produto";

interface Usuario {
    idUsuario: number;
    nomeUsuario: string;
    emailUsuario: string;
    senhaUsuario: string;
    fotoUsuario?: string | null;
    produto?: Produto | null;
}

export default Usuario;