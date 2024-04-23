import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import Input from '../form/Input';
import axios from 'axios';


function Cadastro() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [erro, setErro] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const[post,setPost] = useState('')

  function createUser() { axios.post('http://localhost:8080/register', {
    nome: username,
    email: email,
    password: password,
    role: selectedOption
  }, 
)
.then((response) => {
  setPost(response.data);
});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setErro(false);
    setErrorMessage('');

    
    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setErro(true);
      setErrorMessage('Por favor, preencha todos os campos');
      return;
    }

    
    if (password !== confirmPassword) {
      setErro(true);
      setErrorMessage('As senhas não coincidem');
      return;
    }}

  return (
    <div className={styles.caixa}>
      
      <div2>
        <h2>Nova Conta</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            type="text"
            text="Nome"
            name="nome"
            id="username"
            placeholder="Insira o seu Nome de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: erro && username.trim() === '' ? 'red' : 'initial' }}
          />
          <Input
            type="email"
            text="e-mail"
            name="email"
            id="email"
            placeholder="reservance@reservance.com"
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
          <Input
            type="password"
            text="Confirme sua senha"
            name="confirmasenha"
            id="confirmasenha"
            placeholder="Confirme sua Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ borderColor: erro && confirmPassword.trim() === '' ? 'red' : 'initial' }}
          />
          <p><b>Qual seu tipo de conta?</b></p>
          <label className={styles.select}>
          <input
              type="checkbox"
              name="opcao1"
              checked={selectedOption === 'RESTAURANT'}
              onChange={() => setSelectedOption('RESTAURANT')}
            />
            Estabelecimento
          </label>
          <label>
            <input
              type="checkbox"
              name="opcao2"
              checked={selectedOption === 'USER'}
              onChange={() => setSelectedOption('USER')}
            />
            Usuário
          </label>
          {erro && <p className={styles.errorMessage}>{errorMessage}</p>}
          <button type="submit" onClick={createUser}>Cadastrar</button>
        </form>
      </div2>
    </div>
  );
}

export default Cadastro;
