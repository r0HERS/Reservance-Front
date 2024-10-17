import React, { useState } from 'react';
import styles from './Entrar.module.css';
import Input from '../form/Input';
import logo from '../../img/Logonovo.png';
import imagem14 from '../../img/Foto14.jpg';

function Entrar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErro(false);
    setErrorMessage('');

    if (email.trim() === '' || password.trim() === '') {
      setErro(true);
      setErrorMessage('Por favor, preencha todos os campos');
      return;
    }

    setTimeout(() => {
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <img src={logo} alt="Reservance Logo" className={styles.logo} />
        <h2>Bem-vindo à Reservance</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            type="text"
            text="Email"
            name="email"
            id="email"
            placeholder="Insira o seu Nome de usuário ou email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: erro && email.trim() === '' ? 'red' : 'initial' }}
          />

          <Input
            type="password"
            text="Senha"
            name="senha"
            id="password"
            placeholder="Digite sua Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: erro && password.trim() === '' ? 'red' : 'initial' }}
          />

          {erro && <p className={styles.errorMessage}>{errorMessage}</p>}
          <p>Não possui uma conta? <a href="/Cadastro">Cadastrar-se</a></p>
          <button type="submit" className={styles.submitButton}>Entrar</button>
        </form>
        {loginSuccess && (
          <div className={styles.successMessageContainer}>
            <div className={styles.successMessage}>Login realizado com sucesso!</div>
          </div>
        )}
      </div>
      <div className={styles.imageContainer}>
        <img src={imagem14} alt="Background" className={styles.backgroundImage} />
      </div>
    </div>
  );
}

export default Entrar;
