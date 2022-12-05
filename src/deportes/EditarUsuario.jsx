import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/usuarios/mos_usuario/'
const URI2 = 'http://localhost:8000/usuarios/act_usuario/'

export const CompEditarUsuario = () => {
    const [nom_usuario, setTitle] = useState ('')
    const [correo, setContent] = useState ('')
    const [contraseña, passContent] = useState ('')
    const navigate = useNavigate()
    const {id} = useParams()
    console.log('El valor del id es: ', id)

    //Procedimiento para actualizar

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(URI2+id, {
            nom_usuario: nom_usuario,
            correo: correo,
            contraseña: contraseña
        })
        navigate('/mos_usuario')
    }

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.nom_usuario)
        setContent(res.data.correo)
        passContent(res.data.contraseña)
    }

    useEffect( ()=>{
        getBlogById()
     },[ ] )

    return(
        <div>
            <h3>Editar Usuario</h3>
            <form>

                <div>
                    <label>Nombre</label>
                    <input
                        value={nom_usuario}
                        onChange={ (e) => setTitle (e.target.value)}
                        type="text"
                    />
                </div>
                
                <div>
                    <label>Correo</label>
                    <input
                        value={correo}
                        onChange={ (e) => setContent(e.target.value)}
                        type="text"
                    />
                </div>

                <div>
                    <label>Contraseña</label>
                    <input
                        value={contraseña}
                        onChange={ (e) => passContent (e.target.value)}
                        type="text"
                    />
                </div>

                <button type="submit" onClick={onSubmit}>Actualizar</button>

            </form>
        </div>
    )
}

export default CompEditarUsuario;