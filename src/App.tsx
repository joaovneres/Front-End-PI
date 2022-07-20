import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import './App.css';
import Home from './paginas/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/Login/Login';
import Sobre from './paginas/Sobre/Sobre';
import CadastroUsuario from './componentes/usuario/CadastroUsuario/CadastroUsuario';
import CadastroCategoria from './componentes/categoria/cadastroCategoria/CadastroCategoria';
import ListaCategoria from './componentes/categoria/listaCategoria/ListaCategoria';
import ListarProduto from './componentes/produto/listarProduto/ListarProduto';
import CadastroProduto from './componentes/produto/cadastroProduto/CadastroProduto';
import DeletarProduto from './componentes/produto/deletarProduto/DeletarProduto';
import DeletarCategoria from './componentes/categoria/deletarCategoria/DeletarCategoria';
import store from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes> {/* Antigo Switch */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/logar" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/categoria" element={<ListaCategoria />} />
          <Route path="/produto" element={<ListarProduto />} />
          <Route path="/formularioCategoria" element={<CadastroCategoria />} />
          <Route path="/formularioProduto" element={<CadastroProduto />} />
          <Route path="/formularioCategoria/:idCategoria" element={<CadastroCategoria />} />
          <Route path="/formularioProduto/:idProduto" element={<CadastroProduto />} />
          <Route path="/deletarCategoria/:idCategoria" element={<DeletarCategoria />} />
          <Route path="/deletarProduto/:idProduto" element={<DeletarProduto />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  )
}


export default App;