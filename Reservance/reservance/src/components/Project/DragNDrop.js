import MesaQuatro from '../../img/MesaQuatro.png';
import MesaDois from '../../img/MesaDois.png';
import PictureDND from './PictureDND';
import SaveButton from '../form/SaveButton';
import './DragNDrop.modules.css';
import { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import BoardComponent from './BoardComponent';

const PictureList = [
  {
    id: 1,
    url: MesaQuatro,
    name: "Mesa para quatro"
  },
  {
    id: 2,
    url: MesaDois,
    name: "Mesa para dois"
  },
];

function DragNDrop() {
  const [board, setBoard] = useState([]);
  const [hoveredButtonId, setHoveredButtonId] = useState(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((prevBoard) => [
      ...prevBoard,
      { ...pictureList[0], boardId: prevBoard.length + 1, imageId: pictureList[0].id },
    ]);
  };

  const handleHover = (boardId, position) => {
    setHoveredButtonId(boardId);
    setButtonPosition(position);
  };

  const handleLeave = () => {
    setHoveredButtonId(null);
  };

  const getBoardId = (buttonId) => {
    const button = board.find((button) => button.boardId === buttonId);
    return button ? button.boardId : null;
  };

  const getImageId = (buttonId) => {
    const button = board.find((button) => button.boardId === buttonId);
    return button ? button.imageId : null;
  };

  const getImageName = (buttonId) => {
    const button = board.find((button) => button.boardId === buttonId);
    return button ? button.name : null;
  };


  return (
    <>
      <div className="MesasSelect">
        {PictureList.map((picture) => (
          <PictureDND key={picture.id} url={picture.url} id={picture.id} />
        ))}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => (
          <button
            key={picture.boardId}
            className="Button"
            type="button"
            onMouseEnter={(e) => handleHover(picture.boardId, { x: e.clientX, y: e.clientY })}
            onMouseLeave={handleLeave}
          >
            <PictureDND url={picture.url} id={picture.id} />
          </button>
        ))}
      </div>
      {hoveredButtonId && (
        <div
          className="Informacoes"
          style={{
            position: 'absolute',
            top: buttonPosition.y,
            left: buttonPosition.x + 50,
            backgroundColor: '#fff',
            padding: '10px',
            border: '1px solid #000',
            borderRadius: '5px',
          }}
        >
          Board ID: {getBoardId(hoveredButtonId)}, Image ID: {getImageId(hoveredButtonId)}, Nome da Imagem: {getImageName(hoveredButtonId)}
        </div>
      )}
    </>
  );
}

export default DragNDrop