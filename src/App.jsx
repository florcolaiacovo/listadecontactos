import React, { useState } from 'react';
import './App.css'
import Contacto from './components/Contacto';
import ContactoForm from './components/ContactoForm';

function App() {

  const [listaContactos, setListaContactos] = useState([]);
  const nuevoContacto = (contacto) => {
    setListaContactos([contacto, ...listaContactos])
  }
  //console.log(listaContactos)

  const borrar = (id) => {
    const listaFiltrada = listaContactos.filter((e, index) => index !== id);
    setListaContactos(listaFiltrada);
  }

  return (
    <div>
      <ContactoForm
        nuevoContacto={nuevoContacto} />
      <div>
        {listaContactos.map((e, index) => <Contacto 
                                      nombre={e} 
                                      borrar={borrar} 
                                      id={index}
        
                                      />
                                      )}
      </div>
      
    </div>
  )
}

export default App
