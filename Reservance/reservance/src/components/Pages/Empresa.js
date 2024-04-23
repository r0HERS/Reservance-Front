import React, { useState } from 'react';
import styles from './Empresa.module.css';
import imagem from '../../img/pratorestaurante.png';
import capiva from '../../img/capiva.png';
import renan from '../../img/renan.png';
import gui from '../../img/gui.png';
import dalecio from '../../img/dalecio.png';

function Empresa(props) {
  const [informacao, setInformacao] = useState('');

  const mostrarInformacao = (texto) => {
    setInformacao(texto);
  };

  return (
    <div className={styles.empresa_container}>
      <div className={styles.texto_container}>
        <div className={styles.titulo_container}>
          <h1>Empresa</h1>
          <h2>Quem Somos</h2>

        </div>
        <p>
          Bem-vindo à nossa plataforma de reservas de mesas, criada por alunos da PUC Campinas. Conectando pessoas e experiências gastronômicas de forma simples e eficiente.
        </p>
        <p>
          A Reservance é um projeto idealizado a partir de um projeto da matéria: PI:Orientados a Objetos, no qual a vontade e carinho pela ideia se externalizaram e se concretizaram nesta empresa.
        </p>
      </div>
      <div className={styles.imagem_container}>
        <img src={imagem} alt="Imagem da empresa" className={styles.primeira_imagem} />
      </div>

      <div className={styles.imagens_container}>
        <div className={styles.imagem_container}>
          <button onClick={() => mostrarInformacao('Nome: Gustavo Mota / RA: 22010798')}>
            <p>Gustavo Mota</p>
            <img src={capiva} alt="Imagem da Capiva" />
          </button>
        </div>
        <div className={styles.imagem_container}>
          <button onClick={() => mostrarInformacao('Nome: Renan Rohers / RA: 22003561')}>
            <p>Renan Rohers</p>
            <img src={renan} alt="Imagem do Renan" />
          </button>
        </div>
        <div className={styles.imagem_container}>
          <button onClick={() => mostrarInformacao('Nome: Luís Guilherme / RA: 22013635')}>
            <p>Luís Guilherme</p>
            <img src={gui} alt="Imagem do Gui" />
          </button>
        </div>
        <div className={styles.imagem_container}>
          <button onClick={() => mostrarInformacao('Nome: Thiago Dalecio / RA: 22001336')}>
            <p>Thiago Dalecio</p>
            <img src={dalecio} alt="Imagem do Dalecio" />
          </button>
        </div>
      </div>

      <div className={styles.informacao_container}>
        <p>{informacao}</p>
      </div>
    </div>
  );
}

export default Empresa;
