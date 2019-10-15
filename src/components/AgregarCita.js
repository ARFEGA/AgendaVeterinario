import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { agregarCitaAction } from '../actions/citasActions';
import { validarFormularioAction } from '../actions/validarActions';
import uuid from 'uuid/v4';



const AgregarCita = () => {
    //State del componente
    const [Mascota, setMascota] = useState('');
    const [Propietario, setPropietario] = useState('');
    const [Fecha, setFecha] = useState('');
    const [Hora, setHora] = useState('');
    const [Sintomas, setSintomas] = useState('');

    //Ejecutar actions a través de Dispatch
    const dispatch = useDispatch();
    const agregarNuevaCita = auxCita => dispatch(agregarCitaAction(auxCita));
    const validarFormulario = auxError => dispatch(validarFormularioAction(auxError));

    //Acceder a error del state
    const error = useSelector(state => state.errorValidar);

    //Función que lanza el formulario
    const submitNuevaCita = e =>{
        e.preventDefault();

        //Validar formulario con Redux
        if (Mascota.trim() === '' || Propietario.trim() === '' || Fecha.trim() === '' || Hora.trim() === '' || Sintomas.trim() === '' ){
            validarFormulario(true);
            return;
        }
        validarFormulario(false);
        //Crear cita y almacenar en redux state
        agregarNuevaCita({
            id:uuid(),Mascota,Propietario,Fecha,Hora,Sintomas
        });
        //Reiniciar el form
            setMascota('');
            setPropietario('');
            setFecha('');
            setHora('');
            setSintomas('');
    }



    return ( 
        <div className="card mt-5">
            <div className="card-body">
                {error.error ? <div className="alert alert-danger text-center p2">Todos los campos son obligatorios</div> : null}
                <h2 className="card-title text-center mb-5">Agregar Cita</h2>
                <form onSubmit={submitNuevaCita}>
                    <div className="form-group row">
                        <label className="col-12 col-form-label">Nombre Mascota</label>
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Mascota"
                                value={Mascota}
                                onChange={e => setMascota(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-12 col-form-label">Nombre Dueño</label>
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Dueño de la Mascota"
                                value={Propietario}
                                onChange={e => setPropietario(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input
                                type="date"
                                className="form-control"
                                value={Fecha}
                                onChange={e => setFecha(e.target.value)}
                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                                type="time"
                                className="form-control"
                                value={Hora}
                                onChange={e => setHora(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-12 col-form-label">Sintomas</label>
                        <div className="col-12">
                            <textarea
                                className="form-control"
                                value={Sintomas}
                                onChange={e => setSintomas(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
     );
}
 
export default AgregarCita;