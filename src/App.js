import React from 'react';
//Redux
import store from './store';
//Necesario para que el store esté disponible en toda la app
import { Provider } from 'react-redux'
import AgregarCita from './components/AgregarCita';
import ListadoCitas from './components/ListadoCitas';




function App() {
  return (
    //Definimos el provider pasandole el store que va a emplear
    <Provider store={store}>
      <div className="container">
          <header>
            <h1 className="text-center">Gestión Citas Pcientes</h1>
          </header>
        
          <div className="row">
            <div className="col-md-6">
              <AgregarCita/>
            </div>
            <div className="col-md-6">
              <ListadoCitas/>
            </div>
          </div>
      </div>
    </Provider>
  );
}

export default App;
