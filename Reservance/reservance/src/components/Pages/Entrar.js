import React, { useState, useEffect } from 'react';
import styles from './Entrar.module.css';
import Input from '../form/Input';

function Entrar() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    // Simular a resposta bem-sucedida do backend
    setTimeout(() => {
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className={styles.caixa}>
      <div2>
        <h2>Reservance</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            type="text"
            text="email"
            name="email"
            id="email"
            placeholder="Insira o seu Nome de usuario ou email"
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
          <button type="submit">Entrar</button>
        </form>
        {loginSuccess && (
          <div className={styles.successMessageContainer}>
            <div className={styles.successMessage}>Login realizado com sucesso!</div>
          </div>
        )}
      </div2>
    </div>
  );
}

export default Entrar;
