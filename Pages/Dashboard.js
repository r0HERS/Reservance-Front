import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    const reservasIniciais = [
        { id: 1, pedido: 'Bife à parmegiana', horario: '12:00', cliente: 'João Silva', prePreparo: true },
        { id: 2, pedido: 'Lasanha', horario: '13:00', cliente: 'Maria Souza', prePreparo: false },
        { id: 3, pedido: 'Pizza Margherita', horario: '14:00', cliente: 'Carlos Santos', prePreparo: true },
        { id: 4, pedido: 'Salada Caesar', horario: '12:30', cliente: 'Ana Oliveira', prePreparo: false },
        { id: 5, pedido: 'Sushi', horario: '15:00', cliente: 'Paula Costa', prePreparo: true },
        { id: 6, pedido: 'Churrasco', horario: '11:30', cliente: 'Roberto Lima', prePreparo: false },
        { id: 7, pedido: 'Ravioli', horario: '13:30', cliente: 'Fernanda Melo', prePreparo: true },
        { id: 8, pedido: 'Picanha', horario: '12:15', cliente: 'Marcos Souza', prePreparo: false }
    ];

    const [reservas, setReservas] = useState(reservasIniciais);
    const [searchTerm, setSearchTerm] = useState('');

    const sortedReservas = reservas.sort((a, b) => b.prePreparo - a.prePreparo);

    const filteredReservas = sortedReservas.filter(reserva =>
        reserva.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reserva.pedido.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reserva.horario.includes(searchTerm)
    );

    return (
        <div className={styles.dashboardContainer}>
            <h1>Painel de Controle do Restaurante</h1>
            <input
                type="text"
                placeholder="Filtrar reservas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />
            <div className={styles.dashboardContent}>
                <div className={styles.reservasSection}>
                    <h2>Reservas Atuais</h2>
                    <div className={styles.reservasList}>
                        {filteredReservas.map(reserva => (
                            <div key={reserva.id} className={styles.reservaBox}>
                                <div className={styles.reservaHeader}>
                                    <h3 className={styles.reservaCliente}>{reserva.cliente}</h3>
                                    {reserva.prePreparo && <FaClock className={styles.prePreparoIcon} title="Pré-preparo solicitado" />}
                                </div>
                                <p className={styles.reservaPedido}>Pedido: {reserva.pedido}</p>
                                <p className={styles.reservaHorario}>Horário: {reserva.horario}</p>
                                <button className={styles.detalhesButton}>Ver Detalhes</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.navigationButtons}>
                    <Link to="/PerfilEstabelecimento" className={styles.navButton}>Editar Perfil</Link>
                    <button className={styles.navButton}>CRUD Cardápio</button>
                    <button className={styles.navButton}>Configuração de Reservas</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
