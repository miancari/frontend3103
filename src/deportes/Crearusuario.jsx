import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import '../../src/style.css';
//import '../style.css';
import Swal from "sweetalert2";

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
        Swal.fire({
            title: 'Guardar Usuario',
            text: 'Esta ud seguro de querer guardar los datos del usuario',
            icon: 'success',
            showDenyButton: true,
            denyButtonText: "NO",
            confirmButtonText: "SI"

        }).then ( response => {
                 if (response.isConfirmed){
                     axios.post(URI, {correo:correo, nom_usuario: nom_usuario , contraseña: contraseña})
                    Swal.fire("Los datos fueron almacenados con exito")
                     navigate('/mos_usuario')
                 } else {
                    Swal.fire("la información no fue almacenada")
                 }
        })
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
                            className="form-control"
                            placeholder="Ingrese su nombre"
                        />    
                </div>

                <div>
                <input
                        value={correo}
                        onChange={ (e)=> setContent(e.target.value)}
                        type="email"
                        className="form-control"
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