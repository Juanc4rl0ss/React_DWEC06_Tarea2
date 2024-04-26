//Este metodo se encarga de mostrar la informacion de los trabajadores
function Trabajador({ id, name, email, phone, eliminar }){
    return(
        <article className="person">
              <img src={`https://randomuser.me/api/portraits/men/${id}.jpg`} alt={`Trabajador ${id}`} />
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
         <button type='button' className='delete-btn' onClick={eliminar}>
            <img src='./src/trash.png' />
          </button>
        </article>
    )
}
export default Trabajador