import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const URI = 'http://localhost:8000/usuarios/regevento'

export const CompCreateEvento = () => {
    
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
            <Card>
                    <Card.Body>

            <Form onSubmit={store}>

                <div className="login-form">

                    <Form.Control
                            value={fecha}
                            onChange={ (e)=> setFecha(e.target.value)}
                            type="text"
                            placeholder="Ingrese la fecha AA/MM/DD"
                        />    
                </div>

                <div className="login-form">
                <Form.Control
                        value={equipo1}
                        onChange={ (e)=> setEquipo1(e.target.value)}
                        type="text"
                        placeholder="Ingrese El Equipo 1"
                    /> 

                </div>

                <div className="login-form">

                    <Form.Control
                        value={equipo2}
                        onChange={ (e)=> setEquipo2(e.target.value)}
                        type = "text"
                        placeholder="Ingrese El Equipo 2"
                    />
                </div>

                
                <div className="login-form">

                    <Form.Control
                        value={marcador1}
                        onChange={ (e)=> setMarcador1(e.target.value)}
                        type = "text"
                        placeholder="Ingrese El Marcador 1"
                    />
                </div>

                
                <div className="login-form">

                    <Form.Control
                        value={marcador2}
                        onChange={ (e)=> setMarcador2(e.target.value)}
                        type = "text"
                        placeholder="Ingrese El Marcador 2"
                    />
                </div>

                
                <div className="login-form">

                    <Form.Control
                        value={t_evento}
                        onChange={ (e)=> setTipoEvento(e.target.value)}
                        type = "text"
                        placeholder="Ingrese El Tipo De Evento"
                    />
                </div>

                <Button variant="success" type="submit" className="btn-register">Guardar</Button>
            </Form>
        </Card.Body>
        </Card>
        </div>
    )
}

export default CompCreateEvento;