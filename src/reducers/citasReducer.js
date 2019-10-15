const initialState = {
    citas:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case 'AGREGAR_CITA':
            return{
                ...state,
                citas:[...state.citas, action.payload]
            }
        case 'BORRAR_CITA':
            return{
                ...state,//Creará un nuevo arreglo con todos los elementos con id distinto (!==) al que nos llega 
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }
        default:return state;
    }
}