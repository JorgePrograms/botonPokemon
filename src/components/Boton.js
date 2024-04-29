import React, { useEffect, useState } from "react";
import imagenes from "./imagenes";


const Boton = () =>{
    
    const [index, setIndex] = useState(1);
    const [comentario, setComentario]=useState(`Este es el pokemon numero 1`)
    
    const btnAtras = () => {
        if(index>1){
            setIndex(index-1);
        }
       
    }
    const btnAdelante = () =>{
        if(index<4){
            setIndex(index+1)
        }
    }
    useEffect(()=>{
        setComentario(`Este es el Pokemon numero ${index}`)
        
        }, [index]);

    return (
        <div className="main-home">

        <div className="container-image">
		<img
            src={imagenes[`pokemon${index}`]}
            alt={`Pokemon ${index}`}
            className="pokemon"
            id={index}
        />
        </div>
   <div className="container-boton">
		<button className="boton" id='atras' onClick={btnAtras}>Atras</button>
		<button className="boton" id='adelante' onClick={btnAdelante}>Adelante</button>
        
	</div>
    <p className='commentario'>{comentario}</p>

    </div>
     

    
    );
};

export default Boton