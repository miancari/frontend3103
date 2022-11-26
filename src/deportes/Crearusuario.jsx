import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import '../../src/style.css';
//import '../style.css';

const URI = 'http://localhost:8000/usuarios/regusuario'

export const CompCrearUsuario = () => {
    //const [nombre, setTitle] = useState('')
    const [correo, setContent] = useState('')
    const [nom_usuario, setUsuario] = useState('')
    const [contraseña, setPass] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {correo:correo, nom_usuario:nom_usuario, contraseña:contraseña})
        navigate('/musuario')
    }

    return(
        <div className="login-form">
            <h3>Creacion de Usuarios</h3>
            <form onSubmit={store}>

                <div>

                    <input
                            value={nom_usuario}
                            onChange={ (e)=> setUsuario(e.target.value)}
                            type="text"
                            placeholder="Ingrese su nombre"
                        />    
                </div>

                <div>
                <input
                        value={correo}
                        onChange={ (e)=> setContent(e.target.value)}
                        type="email"
                        placeholder="Correo"
                    /> 

                </div>

                <div>

                    <input
                        value={contraseña}
                        onChange={ (e)=> setPass(e.target.value)}
                        type = "password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn-register">Guardar Usuario</button>
            </form>
        </div>
    )
}

export default CompCrearUsuario;