import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//mis componentes

import CompCreateEvento from './deportes/CrearEvento';
import CompMostrarevento from './deportes/MostrarEvento';
import ComEditarEvento from './deportes/EditarEvento';
import Admin from './deportes/Admin';
import CompMostrarUsuario from './deportes/MostrarUsuario';
import CompEditarUsuario from './deportes/EditarUsuario';
import CompCrearUsuario from './deportes/Crearusuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>

        <BrowserRouter>
                      <Routes>
                            <Route path='/' element={ <Admin />} />                      
                            <Route path='/regevento' element={ <CompCreateEvento />} />
                            <Route path='/mevento' element={ <CompMostrarevento />} />
                            <Route path='/editarevento/:id' element={ <ComEditarEvento />} />
                            <Route path='/musuario' element={ <CompMostrarUsuario />} />
                            <Route path='/editarusuario/:id' element={ <CompEditarUsuario />} />
                            <Route path='/regusuario' element={ <CompCrearUsuario />} />
                      </Routes>
        </BrowserRouter>
       
          
      
    </div>
  );
}

export default App;
