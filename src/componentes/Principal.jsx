import Trabajadores from './Trabajadores';
import React, { useState } from 'react';

function Principal() {
    const [numeroDeTrabajadores, setNumeroDeTrabajadores] = useState(0);
    
    // Función para actualizar el número de trabajadores en el componente Principal
    const actualizarNumeroDeTrabajadores = (numero) => {
      setNumeroDeTrabajadores(numero);
    }

    return(

      <main>
        <section className="container">
          
          <Trabajadores actualizarNumero={actualizarNumeroDeTrabajadores}
                        totalTrabajadores={numeroDeTrabajadores} />
        </section>

      </main>
    );
  }

//Exportamos la funcion Principal,para que sea renderizada desde main.jsx
export default Principal
