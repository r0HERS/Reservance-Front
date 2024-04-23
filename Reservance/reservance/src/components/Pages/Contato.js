import React from 'react';
import styles from './Contato.module.css';
import githubLogo from '../../img/GitHub-logo.png';
import phoneIcon from '../../img/phone.png';
import emailIcon from '../../img/email.png';

function Contato(props) {
  return (
    <div className={styles.contatoContainer}>
      <h1 style={{ textAlign: 'center' }}>Contato</h1>

      <div className={styles.contatoInfo}>
        <div className={styles.infoItem}>
          <div className={styles.logoContainer}>
            <img src={githubLogo} alt="GitHub" className={styles.logo} />
          </div>
          <div className={styles.infoText}>
            <a href="https://github.com/TiagoDallecio/Reservance" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.logoContainer}>
            <img src={phoneIcon} alt="Telefone" className={styles.logo} />
          </div>
          <div className={styles.infoText}>
            <p>Telefone: (19) 99270-5232</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.logoContainer}>
            <img src={emailIcon} alt="E-mail" className={styles.logo} />
          </div>
          <div className={styles.infoText}>
            <p>E-mail: contato@reservance.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
