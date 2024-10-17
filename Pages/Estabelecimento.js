import React from 'react';
import styles from './Estabelecimento.module.css';
import Logo from '../../img/Logonovo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon not showing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const avaliacoes = [
    { id: 1, usuario: 'Usuário 1', comentario: 'Ótimo lugar!', rating: 5 },
    { id: 2, usuario: 'Usuário 2', comentario: 'Comida excelente!', rating: 4 },
];

const mediaAvaliacao = avaliacoes.reduce((acc, curr) => acc + curr.rating, 0) / avaliacoes.length;

const fakeLatitude = -23.550520;
const fakeLongitude = -46.633308;

function Estabelecimento(props) {
    const { nome = "Sabor Caseiro", categoria = "Brasileira" } = props;

    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.profileBox}>
                    <img src={Logo} alt="Profile" className={styles.profileImage} />
                    <h1 className={styles.title}>{nome}</h1>
                </div>
            </div>
            <div className={styles.buttonBox}>
                <Link to="/ExecReserva" className={styles.button}>Reservar Mesa</Link>
                <Link to="/Cardapio" className={styles.button}>Ver Cardápio</Link>
            </div>
            <div className={styles.infoContainer}>
                <h2 className={styles.sectionTitle}>Informações</h2>
                <p className={styles.infoText}>Categoria: {categoria}</p>
                <p className={styles.infoText}>Horários: 10:00 - 22:00</p>
                <p className={styles.infoText}>Descrição: Este é um ótimo lugar para desfrutar de uma refeição maravilhosa.</p>
            </div>
            <div className={styles.ratingContainer}>
                <h2 className={styles.sectionTitle}>Média de Avaliações</h2>
                <div className={styles.ratingBox}>
                    <FontAwesomeIcon icon={faStar} size="2x" color="#FFD700" />
                    <span className={styles.ratingText}>{mediaAvaliacao.toFixed(1)}</span>
                </div>
                <div className={styles.starProgress}>
                    <div className={styles.starFill} style={{ width: `${(mediaAvaliacao / 5) * 100}%` }}></div>
                </div>
            </div>
            <div className={styles.avaliacoesContainer}>
                <h2 className={styles.sectionTitle}>Avaliações</h2>
                {avaliacoes.map(avaliacao => (
                    <div key={avaliacao.id} className={styles.avaliacaoBox}>
                        <p className={styles.avaliacaoUsuario}>{avaliacao.usuario}</p>
                        <p className={styles.avaliacaoComentario}>{avaliacao.comentario}</p>
                        <p className={styles.avaliacaoRating}>Nota: {avaliacao.rating}</p>
                    </div>
                ))}
            </div>
            <div className={styles.mapContainer}>
                <h2 className={styles.sectionTitle}>Localização</h2>
                <MapContainer center={[fakeLatitude, fakeLongitude]} zoom={13} className={styles.map}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[fakeLatitude, fakeLongitude]}>
                        <Popup>
                            {nome} (Média: {mediaAvaliacao.toFixed(1)})
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
}

export default Estabelecimento;
