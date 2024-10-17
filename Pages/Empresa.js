import React from 'react';
import { FaDownload, FaSearch, FaCalendarAlt, FaUtensils, FaCreditCard, FaBell } from 'react-icons/fa';
import styles from './Empresa.module.css';

import imagem from '../../img/Foto16.jpg';
import customerSatisfaction from '../../img/Foto7.jpg';


function Empresa(props) {
  return (
    <div className={styles.empresaContainer}>
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <span className={styles.reser}>Reserv</span><span className={styles.ance}>ance</span>
          </h1>
          <p>Revolucionando a experiência de reservas e pedidos online.</p>
        </div>
      </header>

      <section id="introSection" className={styles.introSection}>
        <div className={styles.text}>
          <h2>Como Funciona</h2>
          <p>Com a Reservance, os clientes podem fazer reservas, pedidos antecipados e pagamentos diretamente pelo aplicativo. Os restaurantes ganham em eficiência, previsibilidade e satisfação do cliente.</p>
        </div>
        <div className={styles.image}>
          <img src={imagem} alt="Funcionamento da Reservance" />
        </div>
      </section>

      <section id="journeySection" className={styles.journeySection}>
        <h2>A Jornada do Usuário</h2>
        <div className={styles.journeyPath}>
          <div className={styles.journeyStep}>
            <FaDownload size={50} />
            <h3>1. Baixar o Aplicativo</h3>
          </div>
          <div className={styles.arrow}>&#10132;</div>
          <div className={styles.journeyStep}>
            <FaSearch size={50} />
            <h3>2. Encontrar o Restaurante</h3>
          </div>
          <div className={styles.arrow}>&#10132;</div>
          <div className={styles.journeyStep}>
            <FaCalendarAlt size={50} />
            <h3>3. Reservar uma Mesa</h3>
          </div>
          <div className={styles.arrow}>&#10132;</div>
          <div className={styles.journeyStep}>
            <FaUtensils size={50} />
            <h3>4. Fazer um Pedido de Prato</h3>
          </div>
          <div className={styles.arrow}>&#10132;</div>
          <div className={styles.journeyStep}>
            <FaCreditCard size={50} />
            <h3>5. Pagar pelo Pedido</h3>
          </div>
          <div className={styles.arrow}>&#10132;</div>
          <div className={styles.journeyStep}>
            <FaBell size={50} />
            <h3>6. Acionar preparo online</h3>
          </div>
        </div>
      </section>

      <section id="benefitsSection" className={styles.benefitsSection}>
        <h2>Benefícios em Todas as Etapas</h2>
        <div className={`${styles.benefit} ${styles.benefitGray}`}>
          <h3>1. Baixar o Aplicativo</h3>
          <ul>
            <li><strong>Cliente:</strong> Conveniência de acesso fácil.</li>
            <li><strong>Estabelecimento:</strong> Aumento na visibilidade online.</li>
          </ul>
        </div>
        <div className={`${styles.benefit} ${styles.benefitWhite}`}>
          <h3>2. Encontrar o Restaurante</h3>
          <ul>
            <li><strong>Cliente:</strong> Facilidade de encontrar opções adequadas.</li>
            <li><strong>Estabelecimento:</strong> Maior exposição para novos clientes.</li>
          </ul>
        </div>
        <div className={`${styles.benefit} ${styles.benefitGray}`}>
          <h3>3. Reservar uma Mesa</h3>
          <ul>
            <li><strong>Cliente:</strong> Comodidade e rapidez na reserva.</li>
            <li><strong>Estabelecimento:</strong> Melhor gestão de mesas e redução de no-shows.</li>
          </ul>
        </div>
        <div className={`${styles.benefit} ${styles.benefitWhite}`}>
          <h3>4. Fazer um Pedido de Prato</h3>
          <ul>
            <li><strong>Cliente:</strong> Redução no tempo de espera.</li>
            <li><strong>Estabelecimento:</strong> Melhoria na eficiência da cozinha.</li>
          </ul>
        </div>
        <div className={`${styles.benefit} ${styles.benefitGray}`}>
          <h3>5. Pagar pelo Pedido</h3>
          <ul>
            <li><strong>Cliente:</strong> Pagamento rápido e seguro.</li>
            <li><strong>Estabelecimento:</strong> Redução de erros no pagamento.</li>
          </ul>
        </div>
        <div className={`${styles.benefit} ${styles.benefitWhite}`}>
          <h3>6. Notificação de Preparação</h3>
          <ul>
            <li><strong>Cliente:</strong> Pratos prontos na chegada.</li>
            <li><strong>Estabelecimento:</strong> Melhor previsibilidade e planejamento.</li>
          </ul>
        </div>
      </section>

      <section id="statsSection" className={styles.statsSection}>
        <h2>Impacto da Reservance</h2>
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <h3>30%</h3>
            <p>Aumento na rotatividade de mesas.</p>
          </div>
          <div className={styles.stat}>
            <h3>50%</h3>
            <p>Incremento na receita anual.</p>
          </div>
          <div className={styles.stat}>
            <h3>75%</h3>
            <p>Clientes relatam redução significativa no tempo de espera.</p>
          </div>
        </div>
        <p className={styles.source}>Fontes: Tablein, FirstTable, Bookeo</p>
      </section>

      <section id="satisfactionSection" className={styles.satisfactionSection}>
        <div className={styles.satisfactionContent}>
          <img src={customerSatisfaction} alt="Satisfação do Cliente" className={styles.satisfactionImage} />
          <div className={styles.satisfactionText}>
            <h2>Satisfação do Cliente</h2>
            <p>A Reservance garante uma experiência excepcional tanto para clientes quanto para restaurantes. Clientes satisfeitos contribuem 14x mais financeiramente, aumentando a fidelidade e a base de cliente.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Empresa;
