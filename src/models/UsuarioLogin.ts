interface UsuarioLogin {
    idLogin: number;
    usuarioLogin: string;
    senhaLogin: string;
    tokenLogin?: string| null
}

export default UsuarioLogin;