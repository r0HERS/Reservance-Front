import React from 'react';
import styles from './Contato.module.css';
import Logo from '../../img/Logonovo.png';

function Contato(props) {
  return (
    <div className={styles.contatoContainer}>
      <header className={styles.header}>
        <img src={Logo} alt="Reservance Logo" className={styles.logo} />
        <h1>Entre em Contato</h1>
        <p>Estamos aqui para ajudar. Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
      </header>

      <section className={styles.formSection}>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </section>

      <section className={styles.contactInfo}>
        <h2>Informações de Contato</h2>
        <p>Email: reservance@reservance.com</p>
        <p>Telefone: (19) 99270-5232</p>
      </section>
    </div>
  );
}

export default Contato;
