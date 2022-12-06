import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/usuarios/mos_evento/'
const URI2 = 'http://localhost:8000/usuarios/act_evento/'

export const ComEditarEvento = () => {
    const [fecha, setFecha] = useState ('')
    const [equipo1, setEquipo1] = useState ('')
    const [equipo2, setEquipo2] = useState ('')
    const [marcador1, setMarcador1] = useState ('')
    const [marcador2, setMarcador2] = useState ('')
    const [t_evento, setTipoEvento] = useState ('')
    const navigate = useNavigate()
    const {id} = useParams()
    console.log('El valor del id es: ', id)

    //Procedimiento para actualizar

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI2+id, {
            fecha: fecha,
            equipo1: equipo1,
            equipo2: equipo2,
            marcador1: marcador1,
            marcador2: marcador2,
            t_evento: t_evento
        })
        navigate('/mevento')
    }

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setFecha(res.data.fecha)
        setEquipo1(res.data.equipo1)
        setEquipo2(res.data.equipo2)
        setMarcador1(res.data.marcador1)
        setMarcador2(res.data.marcador2)
        setTipoEvento(res.data.t_evento)
    }

    useEffect( ()=>{
        getBlogById()
     },[ ] )

    return(
        <div>
            <h3>Editar Evento</h3>
            <form onSubmit={update}>

                <div>
                    <label>Fecha</label>
                    <input
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value)}
                        type="text"
                    />
                </div>
                
                <div>
                    <label>Equipo 1</label>
                    <input
                        value={equipo1}
                        onChange={ (e) => setEquipo1(e.target.value)}
                        type="text"
                    />
                </div>

                <div>
                    <label>Equipo 2</label>
                    <input
                        value={equipo2}
                        onChange={ (e) => setEquipo2 (e.target.value)}
                        type="text"
                    />
                </div>
                
                <div>
                    <label>Marcador 1</label>
                    <input
                        value={marcador1}
                        onChange={ (e) => setMarcador1 (e.target.value)}
                        type="text"
                    />
                </div>
                
                <div>
                    <label>Marcador 2</label>
                    <input
                        value={marcador2}
                        onChange={ (e) => setMarcador2 (e.target.value)}
                        type="text"
                    />
                </div>
                
                <div>
                    <label>Tipo De Evento</label>
                    <input
                        value={t_evento}
                        onChange={ (e) => setTipoEvento (e.target.value)}
                        type="text"
                    />
                </div>

                <button type="submit">Actualizar</button>

            </form>
        </div>
    )
}

export default ComEditarEvento;