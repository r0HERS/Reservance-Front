import React, { useEffect, useState } from 'react';
import styles from './ViewReservas.module.css';
import axios from 'axios';

const ViewReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/reservas');
        setReservas(response.data);
      } catch (error) {
        console.error('Erro ao buscar as reservas', error.message);
      }
    };

    fetchReservas();
  }, []);


    return (
        <div className={styles.InfoReservas}>
          <h2>Lista de Reservas</h2>
          <ul>
            {reservas.map((reserva) => (
              <li key={reserva.id}>
                <p>Nome do Cliente: {reserva.nome_cliente}</p>
                <p>CPF: {reserva.CPF}</p>
                <p>Celular: {reserva.celular}</p>
                <p>Email: {reserva.email}</p>
                <p>Mesa: {reserva.mesa.numero}</p>
                <p>Horário: {reserva.horario}</p>
                <p>Número de Pessoas: {reserva.numero_pessoas}</p>
                <p>Observações: {reserva.observacoes}</p>
              </li>
            ))}
          </ul>
        </div>
      );
            };
    
    export default ViewReservas;