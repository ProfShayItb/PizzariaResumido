import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Importa os hooks
import api from "../../service/api";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap

export default function FormularioProduto() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    codigoBarras: "",
    urlFoto: "",
    preco: "",
    categoria_id: "",
    statusProd: "",
  });

  const location = useLocation(); // Recebe os dados da localização (produto)
  const navigate = useNavigate(); // Usado para navegação

  // Quando a página é carregada, preenche o formulário com os dados do produto (se houver)
  useEffect(() => {
    if (location.state && location.state.produto) {
      setForm(location.state.produto);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.id) {
        // Atualiza o produto existente
        await api.put(`/api/v1/produtos/${form.id}`, form);
        alert("Produto atualizado com sucesso!");
      } else {
        // Cadastra um novo produto
        await api.post("/api/v1/produtos", form);
        alert("Produto cadastrado com sucesso!");
      }

      // Redireciona para o catálogo após salvar
      navigate("/catalogo");
    } catch (err) {
      alert("Erro ao salvar o produto!");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Cadastrar/Atualizar Produto</h1>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleInputChange}
            className="form-control"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Código de Barras</label>
          <input
            type="text"
            name="codigoBarras"
            value={form.codigoBarras}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">URL da Foto</label>
          <input
            type="text"
            name="urlFoto"
            value={form.urlFoto}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Preço</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            value={form.preco}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoria ID</label>
          <input
            type="number"
            name="categoria_id"
            value={form.categoria_id}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <input
            type="text"
            name="statusProd"
            value={form.statusProd}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {form.id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}
