import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExecReserva.module.css';
import MesaQuatro from '../../img/MesaQuatro.png';
import MesaDois from '../../img/MesaDois.png';
import MesaCinco from '../../img/MesaCinco.png';
import MesaSeis from '../../img/MesaSeis.png';
import MesaOito from '../../img/MesaOito.png';

import LinkButton from '../Layout/LinkButton';
import styles from './ExecReserva.module.css';

const PictureList = [
  {
    id: 1,
    url: MesaQuatro,
    name: "Mesa para quatro",
    disponivel: true,
  },
  {
    id: 2,
    url: MesaDois,
    name: "Mesa para dois",
    disponivel: true,
  },
  {
    id: 3,
    url: MesaCinco,
    name: "Mesa para cinco",
    disponivel: true,
  },
  {
    id: 4,
    url: MesaSeis,
    name: "Mesa para seis",
    disponivel: true,
  },
  {
    id: 5,
    url: MesaOito,
    name: "Mesa para oito",
    disponivel: false,
  },
  {
    id: 6,
    url: MesaDois,
    name: "Mesa para dois",
    disponivel: true,
  },
  {
    id: 7,
    url: MesaQuatro,
    name: "Mesa para dois",
    disponivel: true,
  },
];

function ExecReserva() {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    setSelectedButton(selectedButton === id ? null : id);
  };

  const handleBodyClick = (e) => {
    if (!e.target.closest(".Board")) {
      setSelectedButton(null);
    }
  };

  const handleReservarClick = () => {
    const selectedMesa = PictureList.find((p) => p.id === selectedButton);
    navigate('/FormsReserva', { state: { mesa: selectedMesa } });
  };

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [selectedButton]);

  return (
    <>
      <div className="Board">
        {PictureList.map((picture) => (
          <button
            key={picture.id}
            style={{
              backgroundColor:
                selectedButton === picture.id
                  ? 'white'
                  : picture.disponivel
                  ? 'azure'
                  : 'red',
            }}
            onClick={() => handleButtonClick(picture.id)}
          >
            <img src={picture.url} alt={picture.id} />
          </button>
        ))}
      </div>
      {selectedButton !== null && (
        <div className={styles.InfoPainel} style={{ padding: '0.5em' }}>
          <p>ID: {selectedButton}</p>
          <p>Tipo: {PictureList.find((p) => p.id === selectedButton)?.name}</p>
          <p>Disponivel: {PictureList.find((p) => p.id === selectedButton)?.disponivel ? 'Sim' : 'Não'}</p>
          <p>Espaço: Salão Principal</p>
          {PictureList.find((p) => p.id === selectedButton)?.disponivel && (
            <>
              <p></p>
              <p></p>
              <button onClick={handleReservarClick}>Reservar</button>
            </>
          )}
          <p></p>
          <p></p>
        </div>
      )}
    </>
  );
}

export default ExecReserva;
