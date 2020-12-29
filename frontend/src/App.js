import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clienteAxios from './config/axios';

// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';


function App() {

  // state de la app
  const [citas, guardarCitas] = useState([]);

  useEffect( () => {
    const consultarAPI = () => {
      clienteAxios('/pacientes') // http://localhost:4000/pacientes
        .then(respuesta => {
          guardarCitas(respuesta.data);
        })
        .catch(error => {
          console.log(error);
        });
    } 
    consultarAPI();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            exact path="/" component={ Pacientes }
          />

          <Route 
            exact path="/nueva" component={ NuevaCita }
          />

          <Route 
            exact path="/cita/:id" component={ Cita }
          />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
