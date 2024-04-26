/**importaciones para que funcione la clase, incluyendo la clase de la App, react y los estilos CSS**/
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Principal from './componentes/Principal'


//Renderizamos React,para que el id root sea el punto de partida
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Principal />
  </React.StrictMode>
)
