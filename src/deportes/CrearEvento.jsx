import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import '../../src/style.css';
//import '../style.css';

const URI = 'http://localhost:8000/usuarios/regevento'

export const CompCreateEvento = () => {
    //const [nombre, setTitle] = useState('')
    const [fecha, setFecha] = useState('')
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')
    const [marcador1, setMarcador1] = useState('')
    const [marcador2, setMarcador2] = useState('')
    const [t_evento, setTipoEvento] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {fecha:fecha, equipo1:equipo1, equipo2:equipo2, marcador1:marcador1, marcador2:marcador2, t_evento:t_evento })
        navigate('/mevento')
    }

    return(
        <div className="login-form">
            <h3>Creación de Eventos Deportivos</h3>
            <form onSubmit={store}>

                <div>

                    <input
                            value={fecha}
                            onChange={ (e)=> setFecha(e.target.value)}
                            type="text"
                            placeholder="Ingrese la fecha AA/MM/DD"
                        />    
                </div>

                <div>
                <input
                        value={equipo1}
                        onChange={ (e)=> setEquipo1(e.target.value)}
                        type="text"
                        placeholder="Equipo 1"
                    /> 

                </div>

                <div>

                    <input
                        value={equipo2}
                        onChange={ (e)=> setEquipo2(e.target.value)}
                        type = "text"
                        placeholder="Equipo 2"
                    />
                </div>

                
                <div>

                    <input
                        value={marcador1}
                        onChange={ (e)=> setMarcador1(e.target.value)}
                        type = "text"
                        placeholder="Marcador 1"
                    />
                </div>

                
                <div>

                    <input
                        value={marcador2}
                        onChange={ (e)=> setMarcador2(e.target.value)}
                        type = "text"
                        placeholder="Marcador 2"
                    />
                </div>

                
                <div>

                    <input
                        value={t_evento}
                        onChange={ (e)=> setTipoEvento(e.target.value)}
                        type = "text"
                        placeholder="Evento Deportivo"
                    />
                </div>

                <button type="submit" className="btn-register">Guardar</button>
            </form>
        </div>
    )
}

export default CompCreateEvento;