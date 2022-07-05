interface Usuario {
    idUsuario: number;
    nomeUsuario: string;
    emailUsuario: string;
    senhaUsuario: string;
    fotoUsuario?: string| null
}

export default Usuario;