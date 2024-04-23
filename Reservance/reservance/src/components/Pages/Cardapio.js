import React, { useState, useRef, useEffect } from 'react';
import styles from '../Pages/Cardapio.module.css';
import CaixaCardapio from '../Layout/CaixaCardapio';
import imagem from '../../img/pratorestaurante.png';
import imagem1 from '../../img/restaurantecima.png';
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cardapio() {
    const [Pratos, setPratos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    const carrinhoRef = useRef();
    const categoriaRef = useRef(null);


    useEffect(() => {
        axios.get('http://localhost:8080/api/cardapio/1')
            .then(response => {
                setPratos(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter pratos:', error);
            });
    }, []);


    useEffect(() => {
        function handleClickOutside(event) {
            if (carrinhoRef.current && !carrinhoRef.current.contains(event.target)) {
                setMostrarCarrinho(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [carrinhoRef]);

    const adicionarAoCarrinho = (prato) => {
        console.log("Produto adicionado ao carrinho:", prato);
        setCarrinho([...carrinho, { ...prato, quantidade: 1 }]);
        setMostrarCarrinho(true);
    };

    const handleQuantidadeChange = (id, quantidade) => {
        quantidade = Math.max(quantidade, 1);
        const novoCarrinho = carrinho.map(item =>
            item.id === id ? { ...item, quantidade } : item
        );
        setCarrinho(novoCarrinho);
    };

    const removerDoCarrinho = (id) => {
        const novoCarrinho = carrinho.filter(item => item.id !== id);
        setCarrinho(novoCarrinho);
    };

    const calcularTotal = () => {
        return carrinho.reduce((total, prato) => total + prato.preco * prato.quantidade, 0);
    };

    const categorias = [...new Set(Pratos.map(prato => prato.categoria))];

    const pratosOrdenados = Pratos.sort((a, b) => {
        const categoriasOrder = ['entrada', 'pratopricipal', 'sobremesa', 'bebida', 'bebida sem alcool', 'combo'];
        const indexA = categoriasOrder.indexOf(a.categoria);
        const indexB = categoriasOrder.indexOf(b.categoria);

        if (indexA === -1) {
            categoriasOrder.push(a.categoria);
        }
        if (indexB === -1) {
            categoriasOrder.push(b.categoria);
        }

        return categoriasOrder.indexOf(a.categoria) - categoriasOrder.indexOf(b.categoria);
    });

    const handleCategoriaClick = (categoria) => {
        const categoriaContainer = document.getElementById(`categoria-${categoria}`);
        if (categoriaContainer) {
            categoriaContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setCategoriaSelecionada(categoria);
        }
    };

    return (
        <div className={styles.maxcontainer}>
            <div className={styles.topbanner}>
                {categorias.map(categoria => (
                    <button key={categoria} className={styles.topbannerbutton} onClick={() => handleCategoriaClick(categoria)}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</button>
                ))}
            </div>

            <div className={styles.container}>
                <div className={styles.nome}>
                    <h1 className={styles.h1}>Restaurante</h1>
                </div>

                {categorias.map(categoria => (
                <React.Fragment key={categoria}>
                    <h2 className={styles.categoria}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>
                    {pratosOrdenados.filter(prato => prato.categoria === categoria).map(prato => (
                        <div className={styles.layout} key={prato.id}>
                            <CaixaCardapio
                                nome={prato.nome}
                                descricao={prato.descricao}
                                preco={prato.preco}
                                foto={prato.foto}
                                id={prato.id}
                                adicionarAoCarrinho={adicionarAoCarrinho}
                                removerDoCarrinho={removerDoCarrinho}
                            />
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>

            {mostrarCarrinho && (
                <div className={styles.overlay} ref={carrinhoRef}>
                    <div className={styles.carrinho}>
                        <h2>Carrinho <RiShoppingCartLine /></h2>
                        {carrinho.length === 0 ? (
                            <div className={styles.vazio}>
                                <h1>
                                <RiShoppingCartLine />
                                </h1>
                                <p>O carrinho está vazio</p>
                            </div>
                            
                        ) : (
                            <ul>
                                {carrinho.map((item) => (
                                    <li key={item.id}>
                                        <div className={styles.barrabaixa}>
                                            <span>{item.nome} - R$ {item.preco.toFixed(2)}</span>
                                            <button type="button" className={styles.maisemenos} onClick={() => handleQuantidadeChange(item.id, item.quantidade - 1)}>-</button>
                                            <input type="tel" value={item.quantidade} className={styles.input_qnt} onChange={(e) => handleQuantidadeChange(item.id, parseInt(e.target.value))} />
                                            <button type="button" className={styles.maisemenos} onClick={() => handleQuantidadeChange(item.id, item.quantidade + 1)}>+</button>
                                            <button type="button" className={styles.remover} onClick={() => removerDoCarrinho(item.id)}>Remover</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {carrinho.length !== 0 && (
                            <p>Total: R$ {calcularTotal().toFixed(2)}</p>
                        )}
                        {carrinho.length !== 0 && <Link to="/Pagamento" className={styles.pagar}>Continuar Compra</Link>}
                    </div>
                </div>
            )}

            {!mostrarCarrinho && (
                <button type="button" className={styles.cart} onClick={() => setMostrarCarrinho(!mostrarCarrinho)}>
                    <RiShoppingCartLine />
                    <span className={styles.cartstatus}>{carrinho.reduce((total, prato) => total + prato.quantidade, 0)}</span>
                </button>
            )}
        </div>
    );
}

export default Cardapio;
