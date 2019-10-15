import { combineReducers } from 'redux';
import  citasReducer  from './citasReducer';
import validacionReducer from './validacionReducer';

//Necesario para agregar los reducer al state
export default combineReducers(
    {
        citas:citasReducer,
        errorValidar:validacionReducer
    }
);