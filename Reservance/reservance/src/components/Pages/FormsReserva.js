import styles from './FormsReserva.module.css';
import React, { useState } from 'react';
import Input from '../form/Input';
import { useLocation } from 'react-router-dom';

function FormsReserva() {
  const location = useLocation();
  const selectedMesa = location.state?.mesa;

  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [observacao, setObservacao] = useState('');

  const [erroNome, setErroNome] = useState(false);
  const [erroCPF, setErroCPF] = useState(false);
  const [erroEmail, setErroEmail] = useState(false);
  const [erroTelefone, setErroTelefone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErroNome(false);
    setErroCPF(false);
    setErroEmail(false);
    setErroTelefone(false);

    if (nome.trim() === '') {
      setErroNome(true);
    }
    if (cpf.trim() === '') {
      setErroCPF(true);
    }
    if (email.trim() === '') {
      setErroEmail(true);
    }
    if (telefone.trim() === '') {
      setErroTelefone(true);
    }
  };

    return(
        
        <div className={styles.caixa}>
        {selectedMesa && (
        <div className={styles.InfoBox}>
          <div>
          <h3>Sua Mesa </h3>
          <p>ID: {selectedMesa.id}</p>
          <p>Tipo: {selectedMesa.name}</p>
          <p>Disponivel: {selectedMesa.disponivel ? 'Sim' : 'Não'}</p>
          </div>
          <div>
            <img src={selectedMesa.url}/>
          </div>
          
        </div>
      )}

      <div2 className={styles.caixa}>
        <div></div>
        <h2>Reserva</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            text="Nome"
            name="nome"
            placeholder="Insira o seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ borderColor: erroNome ? 'red' : 'initial' }}
          />
          <Input
            type="text"
            text="CPF"
            name="CPF"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
            style={{ borderColor: erroCPF ? 'red' : 'initial' }}
          />
          <Input
            type="text"
            text="e-mail"
            name="email"
            placeholder="reservance@reservance.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: erroEmail ? 'red' : 'initial' }}
          />
          <Input
            type="text"
            text="Telefone"
            name="telefone"
            placeholder="(--)     -    "
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            style={{ borderColor: erroTelefone ? 'red' : 'initial' }}
          />
          <Input
            type="text"
            text="Observação Extra"
            name="-observacao"
            placeholder="Este campo é destinado ao estabelecimento"
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div2>
    </div>
  );
}

export default FormsReserva;