export const agregarCitaAction = cita =>{
    return{
        type:'AGREGAR_CITA',
        payload:cita
    };
}

export const borrarCita = idCita =>{
    return{
        type:'BORRAR_CITA',
        payload:idCita
    };
}