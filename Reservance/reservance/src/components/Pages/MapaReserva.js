import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragNDrop from "../Project/DragNDrop";

import './MapaReserva.modules.css'

function MapaReserva(){

    const handleReload = () => {
        window.location.reload();
      };

    return(
        
        <DndProvider backend={HTML5Backend}>
            <DragNDrop />
            <div className="MapaReservan">
                <button className="btn" onClick={handleReload}>Limpar</button>
                
            </div>
            
        </DndProvider>
        
    );
}

export default MapaReserva