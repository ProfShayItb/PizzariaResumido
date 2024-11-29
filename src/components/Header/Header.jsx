import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'; // O CSS personalizado que vamos criar
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container">
                <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-md-6">
                        <h1 className="logo">Minha Loja</h1>
                    </div>
                    {/* Navegação */}
                    <div className="col-md-6 text-md-end">
                        <nav>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-white">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/catalogo" className="nav-link text-white">Produtos</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/cadastropizza" className="nav-link text-white">Cadastro</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link text-white">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/gerenciar" className="nav-link text-white">Gerenciar</Link> */}
                                
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
