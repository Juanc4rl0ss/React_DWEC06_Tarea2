import { useState,useEffect, useRef  } from "react";
import Trabajador from "./Trabajador";

//Este metodo se encarga de mostrar la informacion de los trabajadores
function Trabajadores({actualizarNumero}){

    // Se crea un estado para guardar los trabajadores
    const[trabajadores, setTrabajadores] = useState([]);

    // Se crea una referencia para guardar el numero de trabajadores en activo
    const trabajadoresEnActivo = useRef(actualizarNumero);

    useEffect(() => {
        // Actualiza la referencia cada vez que actualizarNumero cambia pero useRef no renderiza
        trabajadoresEnActivo.current = actualizarNumero;
    }, [actualizarNumero]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setTrabajadores(data);
                actualizarNumero(data.length);

            });
    }, [])
    
    const eliminarTrabajador = id => {
        
        // Actualiza el estado para filtrar fuera el trabajador que quieres eliminar
        const nuevosTrabajadores = trabajadores.filter(trabajador => trabajador.id !== id);

        // Actualiza el estado con los trabajadores filtrados
        setTrabajadores(nuevosTrabajadores);
        trabajadoresEnActivo.current(nuevosTrabajadores.length);
    }

    return(

        <>
        {trabajadores.map(({ id, name, email, phone, eliminar }) => (
            <Trabajador
                key={id}
                id={id}
                name={name}
                email={email}
                phone={phone}
                eliminar={() => eliminarTrabajador(id)}
            />

        ))}
        </>
     
    )
}
export default Trabajadores;