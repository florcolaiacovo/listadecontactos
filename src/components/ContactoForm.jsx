import React, { useState } from 'react';
import '../App.css'

const ContactoForm = (props) => {
    const [texto, setTexto] = useState("");
    const manejarFormulario = (event) => {
        setTexto(event.target.value);
        console.log(texto)
    }

    const submit = (event) => {
        event.preventDefault();
        if(texto.trim() !== ""){
            props.nuevoContacto(texto);
            setTexto("");
            setValidacion(true);
        } else {
            setValidacion(false)
        }
    }

    //validacion
    const [validacion, setValidacion] = useState(true);

    return (
        <div>
            <form className='form' onSubmit={submit}>
                <span>Crear contacto</span>
                <input value={texto} onChange={manejarFormulario}/>
                <button>Añadir</button>
            </form>
            {
                !validacion &&
                <div> Añada un contacto por favor </div>
            }
        </div>
    );
}

export default ContactoForm;
