import { useState, useEffect } from 'react';
import api from '../../service/api';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap

export default function Home() {
    const [produto, setProduto] = useState([]); // Estado para armazenar os produtos
    const [err, setErr] = useState(null);

    useEffect(() => {
        async function loadCardapio() {
            try {
                const response = await api.get('/api/v1/produtos'); // Requisição api
                console.log('Produtos carregados:', response.data);
                setProduto(response.data);
            } catch (err) {
                setErr('Erro ao carregar os produtos');
                console.log('Erro');
            }
        }

        loadCardapio();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Cardápio</h1>
            
            {err && <p className="text-danger">{err}</p>}

            <div className="row">
                {produto.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="card h-100">
                            <img 
                                src={item.urlFoto} // Supondo que o produto tenha um campo de URL da imagem
                                className="card-img-top" 
                                alt={item.nome} 
                                style={{ height: '200px', objectFit: 'cover' }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.nome}</h5>
                                <p className="card-text">{item.descricao}</p>
                                <p className="card-text">
                                    <strong>Preço: </strong>R$ {item.preco.toFixed(2)}
                                </p>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}