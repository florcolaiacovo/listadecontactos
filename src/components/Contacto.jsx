import React, {useState} from 'react';
import '../App.css'

const Contacto = (props) => {

    const borrarContacto = () => {
        props.borrar(props.id)
    }

    const [conectado, setConectado] = useState(false);

    return (
        <div className='lista'>
             <h4>{props.nombre}</h4>
             <button onClick={() => setConectado(!conectado)}>
                { conectado ? <h4>Desconectado</h4> : <h4>Conectado</h4>}
             </button>
             <button onClick={borrarContacto}>Borrar</button>

            
        </div>
    );
}

export default Contacto;
