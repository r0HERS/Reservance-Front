import styles from'./ProjectForm.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import CriarProjeto from '../Pages/CriarProjeto';



    // ... (código anterior)

const AdicionarEstab = () => {
    const moment = require('moment');
  
    const [nome, setNome] = useState('');
    const [funcionamento_dia, setFuncionamento_dia] = useState('');
    const [hora_inicio, setHora_inicio] = useState('');
    const [hora_fim, setHora_fim] = useState('');
    const [num_mesas, setNum_mesas] = useState('');
    const [erro, setErro] = useState(false);
  
    const hora_inicioStr = moment({ hora_inicio }).format('HH:mm');
    const hora_fimStr = moment({ hora_fim }).format('HH:mm');
  
    const handleAdicionarEstab = async () => {
      try {
        // Reset previous error state
        setErro(false);
  
        // Check if fields are empty
        if (nome.trim() === '' || funcionamento_dia.trim() === '' || hora_inicio.trim() === '' || hora_fim.trim() === '' || num_mesas.trim() === '') {
          setErro(true);
          return;
        }
  
        console.log('Iniciando a solicitação...');
        const EstabResponse = await axios.post('http://localhost:8080/api/estabelecimento', {
          nome,
          funcionamento_dia,
          hora_inicio: hora_inicioStr,
          hora_fim: hora_fimStr,
          num_mesas: parseInt(num_mesas)
        });
  
        console.log('Resposta do Backend: ', EstabResponse.data);
        setNome('');
        setFuncionamento_dia('');
        setHora_inicio('');
        setHora_fim('');
        setNum_mesas('');
      } catch (error) {
        console.error('Erro ao enviar os dados:', error);
      }
    };
  
    return (
      <div className={styles.caixa}>
        <div2>
          <h2>Crie seu Projeto</h2>
          <form className={styles.form}>
            <Input
              type="text"
              text="Nome do Restaurante"
              name="Nome"
              placeholder="Insira o Nome do Restaurante"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={{ borderColor: erro && nome.trim() === '' ? 'red' : 'initial' }}
            />
            <Input
              type="number"
              text="Número de mesas"
              name="NumeroMesas"
              placeholder="Número de Mesas"
              value={num_mesas}
              onChange={(e) => setNum_mesas(e.target.value)}
              style={{ borderColor: erro && num_mesas.trim() === '' ? 'red' : 'initial' }}
            />
            <Input
              type="text"
              text="Dias de funcionamento"
              name="Diasdefuncionamento"
              placeholder="Funcionamento"
              value={funcionamento_dia}
              onChange={(e) => setFuncionamento_dia(e.target.value)}
              style={{ borderColor: erro && funcionamento_dia.trim() === '' ? 'red' : 'initial' }}
            />
            <Input
              type="time"
              text="Horário de Abertura"
              name="Abertura"
              placeholder="Abertura"
              value={hora_inicio}
              onChange={(e) => setHora_inicio(e.target.value)}
              style={{ borderColor: erro && hora_inicio.trim() === '' ? 'red' : 'initial' }}
            />
            <Input
              type="time"
              text="Horário de Fechamento"
              name="Fechamento"
              placeholder="Fechamento"
              value={hora_fim}
              onChange={(e) => setHora_fim(e.target.value)}
              style={{ borderColor: erro && hora_fim.trim() === '' ? 'red' : 'initial' }}
            />
  
            {erro && <p className={styles.errorMessage}>Por favor, preencha todos os campos.</p>}
  
            <button className={styles.button} onClick={handleAdicionarEstab}>
              Criar
            </button>
          </form>
        </div2>
      </div>
    );
  };
  
  export default AdicionarEstab;
  