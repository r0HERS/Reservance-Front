// CaixaCardapio.js
import React, { useState, useEffect } from 'react';
import styles from '../Layout/CaixaCardapio.module.css';

function CaixaCardapio(props) {
    const [quantidade, setQuantidade] = useState(1);
    const [isChecked, setIsChecked] = useState(false);

    const backgroundImageStyle = {
        backgroundImage: `url(${props.url})`
    };

    useEffect(() => {
        const itemNoCarrinho = props.carrinho && props.carrinho.find(item => item.id === props.id);
        if (itemNoCarrinho) {
            setQuantidade(itemNoCarrinho.quantidade);
            setIsChecked(true);
        } else {
            setQuantidade(1);
            setIsChecked(false);
        }
    }, [props.carrinho, props.id]);

    const handleButtonClick = () => {
        if (isChecked) {
            props.removerDoCarrinho(props.id);
            setIsChecked(false);
        } else {
            props.adicionarAoCarrinho({ ...props, quantidade });
            setIsChecked(true);
        }
    };

    const handleIncreaseQuantity = () => {
        setQuantidade(quantidade + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    return (
        <div className={styles.caixa}>
            <div className={styles.img} style={backgroundImageStyle}></div>
            <div className={styles.subcaixa}>
                <div className={styles.nome}>{props.nome}</div>
                <div className={styles.descricao}>{props.descricao}</div>
                <div className={styles.barrabaixa}>
                    <div className={styles.buttonContainer}>
                        <button
                            className={`${styles.button} ${isChecked ? styles.checked : ''}`}
                            onClick={handleButtonClick}
                        >
                            {isChecked ? <span>&#10003;</span> : <span>+</span>}
                        </button>
                    </div>
                    <div className={styles.preco}>{props.preco}</div>
                </div>
            </div>
        </div>
    );
}

export default CaixaCardapio;
