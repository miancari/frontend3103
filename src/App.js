
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//mis componentes

import CompCreateEvento from './deportes/CrearEvento';
import CompMostrarevento from './deportes/MostrarEvento';
import ComEditarEvento from './deportes/EditarEvento';
import Admin from './deportes/Admin';
import CompMostrarUsuario from './deportes/MostrarUsuario';
import CompEditarUsuario from './deportes/EditarUsuario';
import CompCrearUsuario from './deportes/Crearusuario';
import NavBarComp from './deportes/NavbarComp.jsx';
import Login from './deportes/Login.jsx';
import Logo from './deportes/Logo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        </header>

        <BrowserRouter>
                        <Routes>
                          <Route path='/' element={ <NavBarComp />} >                      
                            <Route path='/ad' element={ <Admin />} />
                            <Route path='/regevento' element={ <CompCreateEvento />} />
                            <Route path='/login' element={ <Login />} />
                            <Route path='/mevento' element={ <CompMostrarevento />} />
                            <Route path='/editarevento/:id' element={ <ComEditarEvento />} />
                            <Route path='/musuario' element={ <CompMostrarUsuario />} />
                            <Route path='/editarusuario/:id' element={ <CompEditarUsuario />} />
                            <Route path='/regusuario' element={ <CompCrearUsuario />} />
                            <Route path='*' element={ <Navigate replace to="/" />} />
                          </Route>   
                      </Routes>
        </BrowserRouter>
       
          
      
    </div>
  );
}

export default App;
