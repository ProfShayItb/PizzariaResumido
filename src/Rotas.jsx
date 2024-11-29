// Rotas.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Header from "./components/Header/Header";
// import CadastroSaborPizza from "./pages/cadastro";
// import Login from "./pages/Login";
// import ProtectedRoute from './ProtectedRoute'; // Importar o componente de rota protegida


export default function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/catalogo" element={<Catalogo />} />
        {/* <Route path="/cadastropizza" element={<ProtectedRoute element={<CadastroSaborPizza />} />} /> {/* Protegendo a rota */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/gerenciar" element={<GerenciarProdutos/>}/> */} 
      </Routes>
    </BrowserRouter>
  );
}
