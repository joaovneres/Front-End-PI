import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import './App.css';
import Home from './paginas/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/Login/Login';
import Sobre from './paginas/Sobre/Sobre';
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import CadastroCategoria from './componentes/categoria/cadastroCategoria/CadastroCategoria';


function App() {
  return (
    <Router>
      <Navbar />
         <Routes> {/* Antigo Switch */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
           <Route path="/logar" element={<Login />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />  
          <Route path="/cadastroCategoria" element={<CadastroCategoria />} />
        </Routes>
      <Footer />
    </Router>
  )
}


  export default App;