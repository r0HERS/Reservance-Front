import React, { useState } from 'react';
import styles from '../Pages/Addprato.module.css';

function Addprato() {
    const [pratos, setPratos] = useState([
        {
            id: 1,
            name: "Macarrão",
            descricao: "blablabla",
            categoria: "pratopricipal",
            preco: 20.00,
            
        },
        {
            id: 2,
            name: "Risotto",
            categoria: "pratopricipal",
            descricao: "blablabla",
            preco: 30.00,
            
        },
        {
            id: 3,
            name: "Caipirinha",
            categoria: "bebida",
            descricao: "blablabla",
            preco: 30.00,
            
        },
        {
            id: 4,
            name: "sorvete",
            categoria: "sobremesa",
            descricao: "blablabla",
            preco: 30.00,
            
        },
        {
            id: 5,
            name: "polenta frita",
            categoria: "entrada",
            descricao: "blablabla",
            preco: 30.00,
            
        },
        {
            id: 6,
            name: "picolé",
            categoria: "sobremesa",
            descricao: "blablabla",
            preco: 30.00,
            
        },
        {
            id: 7,
            name: "casquinha de siri",
            categoria: "entrada",
            descricao: "blablabla",
            preco: 30.00,
        },
        {
            id: 8,
            name: "5 cervejas",
            categoria: "combo",
            descricao: "blablabla",
            preco: 30.00,
            
        },
        {
            id: 9,
            name: "aguas",
            categoria: "bebida sem alcool",
            descricao: "blablabla",
            preco: 30.00,
            
        },
    ]);

    const [novoPrato, setNovoPrato] = useState({ nome: '', descricao: '', preco: '', imagem: null });
    const [pratoEditando, setPratoEditando] = useState(null);
    const [excluirPratoId, setExcluirPratoId] = useState(null); // Estado para armazenar o id do prato a ser excluído

    const handleNovoPratoChange = (e) => {
        const { name, value } = e.target;
        setNovoPrato(prevState => ({ ...prevState, [name]: value }));
    };

    const handleImagemChange = (e) => {
        const file = e.target.files[0];
        setNovoPrato(prevState => ({ ...prevState, imagem: file }));
    };

    const handleNovoPratoSubmit = (e) => {
        e.preventDefault();
        const novoId = pratos.length + 1;
        const novoPratoComId = { ...novoPrato, id: novoId };
        setPratos([...pratos, novoPratoComId]);
        setNovoPrato({ nome: '', descricao: '', preco: '', imagem: null });
    };

    const handleEditarPrato = (prato) => {
        setPratoEditando(prato);
    };

    const handleSalvarEdicao = () => {
        const novosPratos = pratos.map(item => {
            if (item.id === pratoEditando.id) {
                return pratoEditando;
            }
            return item;
        });
        setPratos(novosPratos);
        setPratoEditando(null);
    };

    const handleCancelarEdicao = () => {
        setPratoEditando(null);
    };

    const handleRemoverPrato = (id) => {
        setExcluirPratoId(id); // Defina o id do prato a ser excluído
    };

    const confirmarExclusao = () => {
        const pratosFiltrados = pratos.filter(prato => prato.id !== excluirPratoId);
        setPratos(pratosFiltrados);
        setExcluirPratoId(null); // Limpar o id do prato a ser excluído
    };

    const cancelarExclusao = () => {
        setExcluirPratoId(null); // Limpar o id do prato a ser excluído
    };

    return (
        <div className={styles.container}>
            <h2>Adicionar Novo Prato</h2>
            <form onSubmit={handleNovoPratoSubmit}>
                
                <div className={styles.inputGroup}>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={novoPrato.nome}
                        onChange={handleNovoPratoChange}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="imagem">Imagem:</label>
                    <input
                        type="file"
                        id="imagem"
                        name="imagem"
                        onChange={handleImagemChange}
                        accept="image/*"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="Categoria">Categoria:</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        value={novoPrato.categoria}
                        onChange={handleNovoPratoChange}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={novoPrato.descricao}
                        onChange={handleNovoPratoChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="preco">Preço:</label>
                    <input
                        type="number"
                        id="preco"
                        name="preco"
                        value={novoPrato.preco}
                        onChange={handleNovoPratoChange}
                        required
                    />
                </div>
                <button className={styles.button} type="submit">Adicionar Prato</button>
            </form>

            <h2>Pratos Existentes</h2>
            <ul>
                {pratos.map(prato => (
                    <li key={prato.id}>
                        {/* Renderização condicional para editar pratos */}
                        {pratoEditando && pratoEditando.id === prato.id ? (
                            <>
                                <div>
                                    <input
                                        type="text"
                                        name="nome"
                                        value={pratoEditando.nome}
                                        onChange={(e) => setPratoEditando({ ...pratoEditando, nome: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="categoria"
                                        value={pratoEditando.categoria}
                                        onChange={(e) => setPratoEditando({ ...pratoEditando, categoria: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="descricao"
                                        value={pratoEditando.descricao}
                                        onChange={(e) => setPratoEditando({ ...pratoEditando, descricao: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        name="preco"
                                        value={pratoEditando.preco}
                                        onChange={(e) => setPratoEditando({ ...pratoEditando, preco: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <button className={styles.button} onClick={handleSalvarEdicao}>Salvar</button>
                                    <button className={styles.button} onClick={handleCancelarEdicao}>Cancelar</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <strong>Nome:</strong> {prato.name}
                                </div>
                                <div>
                                    <strong>Categoria:</strong> {prato.categoria}
                                </div>
                                <div>
                                    <strong>Descrição:</strong> {prato.descricao}
                                </div>
                                <div>
                                    <strong>Preço:</strong> R$ {prato.preco}
                                </div>
                                <div>
                                    <button className={styles.button} onClick={() => handleEditarPrato(prato)}>Editar</button>
                                    <button className={styles.buttonremove} onClick={() => handleRemoverPrato(prato.id)}>Remover</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            {excluirPratoId && (
                <div className={styles.modalBackdrop}>
                    <div className={styles.modal}>
                        <p>Deseja realmente excluir este prato?</p>
                        <button className={styles.button} onClick={confirmarExclusao}>Sim</button>
                        <button className={styles.button} onClick={cancelarExclusao}>Cancelar</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Addprato;
