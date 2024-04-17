import Trabajadores from './Trabajadores';
import React, { useState } from 'react';

function Principal() {
    const [numeroDeTrabajadores, setNumeroDeTrabajadores] = useState(0);
    
    // Función para actualizar el número de trabajadores en el componente Principal
    const actualizarNumeroDeTrabajadores = (numero) => {
          console.log("Número de trabajadores actualizado:", numero);
      setNumeroDeTrabajadores(numero);
    }

    return(

      <main>
        <section className="container">
          {/* Aquí mostramos el número de trabajadores obtenidos */}

          <h3>Tenemos una plantilla de {numeroDeTrabajadores} trabajadores</h3>
          
          <Trabajadores actualizarNumero={actualizarNumeroDeTrabajadores} />
        </section>

      </main>
    );
  }

//Exportamos la funcion Principal,para que sea renderizada desde main.jsx
export default Principal
