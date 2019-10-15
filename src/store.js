import { createStore } from 'redux';
//Al crear un index.js dentro de la carpeta reducer, con importarlo como "reducer" es suficiente
import reducer from './reducers';
//Importar funciones que gestiona el local storage
import  {getStateStorage, setStateStorage}  from '../src/localstorage';

//Estado inicial
const initialState = getStateStorage();

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () =>{
    setStateStorage({citas:store.getState().citas})
    
})

export default store;