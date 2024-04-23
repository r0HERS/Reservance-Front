import React, { useState } from 'react';
import styles from './Pagamento.module.css';

function Pagamento() {

    return (
        
        <div className={styles.container}>
            
            <div className={styles.indentificacao}>
            <h1>Indentificação</h1>
            </div>
            <div className={styles.finalizaçao}>
                <h1>Finalização</h1>
            </div>
            <div className={styles.relatorio}>
                <h1>Relatorio</h1>
                <div className={styles.pedido}>
                    <h3>Pedido</h3>
                    <div>
                        {/* pedidos aq */}
                    </div>
                    <h3> Total:</h3>
                </div>
            </div>
        </div>
        
    );
}

export default Pagamento;
