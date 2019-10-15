import React from 'react';
import { useDispatch } from 'react-redux';
import { borrarCita } from '../actions/citasActions'; 

const Cita = ({ cita }) => {

    //Ejecutar actions a través de Dispatch
    const dispatch = useDispatch();
    
    return(
        <div>
            <br/>
            <p className="card-text h3">{cita.Mascota}</p>
            <p className="card-text"><span>Dueño:  </span>{cita.Propietario}</p>
            <p className="card-text"><span>Fecha/Hora:  </span>{cita.Fecha} {cita.Hora}</p>
            <p className="card-text"><span>Sintomas:  </span>{cita.Sintomas}</p>
            <button className="btn btn-danger" onClick={() => dispatch(borrarCita(cita.id))} >Borrar &times;</button>
            <br/>
        </div>
    );
}
export default Cita;