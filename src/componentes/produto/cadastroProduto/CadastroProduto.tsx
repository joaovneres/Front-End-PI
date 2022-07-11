import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Produto from '../../../models/Produto';
import Usuario from '../../../models/Usuario';

function CadastroProduto() {
  let navigate = useNavigate();

  const { idProduto } = useParams<{ idProduto: string }>();

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );

  const usuarioId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  );

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    idCategoria: 0,
    tipoCategoria: '',
    tamanhoCategoria: '',
    alimenticiaCategoria: null

  });

  const [produto, setProduto] = useState<Produto>({
    idProduto: 0,
    nomeProduto: '',
    valorProduto: 0,
    descProduto: '',
    imgProduto: '',
    enderecoProduto: '',
    categoria: null,
    usuario: null
  });

  const [usuario, setUsuario] = useState<Usuario>({
    idUsuario: +usuarioId,
    nomeUsuario: '',
    emailUsuario: '',
    senhaUsuario: '',
    fotoUsuario: ''
  });

  useEffect(() =>{
    if(token === ""){
      alert("Você precisa entrar");
      navigate('/logar');
    }
  }, [token]);

  async function buscarCategoria(){
    await buscar('/categorias', setCategorias{
      headers:{
        Authorization : token,
      },
    });
  }

  return (
    <div>CadastroProduto</div>
  )
}

export default CadastroProduto