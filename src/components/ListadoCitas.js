import React from 'react';
import  { useSelector} from 'react-redux';
import Cita from './Cita';

const ListadoCitas = () =>{
    //Extraer las citas
    const citas = useSelector(state => state.citas);
    //Mensaje condicional litado citas
    const mensajeListadoCitas = Object.keys(citas.citas).length === 0 ? "No hay citas" :"Administrar Citas";
    return(
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensajeListadoCitas}</h2>
            <div className="lista-citas">
                {citas.citas.map(cita => (
                        <Cita className="p2"
                            key={cita.id}
                            cita={cita}
                        />
                    ))
                }
            </div>
          </div>
        </div>
    );
}
export default ListadoCitas;