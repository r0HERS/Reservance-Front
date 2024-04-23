import { useDrag } from "react-dnd"

function PictureDND({url,id}){

        const [{ isDragging }, drag] =useDrag(() => ({
        type: "image",
        item: { id:id },
        collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
        }),

        }));
        

        return(< img ref={drag} src={url} alt={id} style={{ border: isDragging ? "3px solid black" : "0px"}}/>)
}

export default PictureDND