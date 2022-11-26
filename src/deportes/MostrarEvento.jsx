import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import styles from "*/styles.module.css";

//Importamos la ruta para mostrar los eventos deportivos

const URI = 'http://localhost:8000/usuarios/mos_evento/'
const URI2 = 'http://localhost:8000/usuarios/borr_evento/'

export const CompMostrarevento = () => {

    const [ceventos, setBlog] = useState([])
    useEffect( ()=> {
        getBlogs()
    },[])

    //procedimiento para mostrar los registros

    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimiento para eliminar un registro
    const deleteBlog = async (id) => {
        await axios.delete(`${URI2}${id}`)
        getBlogs()
    }

    return(
        <div className="">
            <div className='row'>
                <div className='col'>
                    <Link to="/regevento" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i>Crear Evento</Link>
                    <table className="table">
                        <thead className='thead tr:first-child'>
                            <tr>
                                <th>Fecha</th>
                                <th>Equipo 1</th>
                                <th>Equipo 2</th>
                                <th>Marcador 1</th>
                                <th>Marcador 2</th>
                                <th>Evento</th>
                            </tr>
                        </thead>
                        <tbody>
                            { ceventos.map ((blog) => (
                                <tr key={ blog._id}>
                                    <td> { blog.fecha } </td>
                                    <td> { blog.equipo1 } </td>
                                    <td> { blog.equipo2 } </td>
                                    <td> { blog.marcador1 } </td>
                                    <td> { blog.marcador2 } </td>
                                    <td> { blog.t_evento } </td>
                                    <td> 

                                        <Link to={`/editarevento/${blog._id}`} className=''><i className="fas fa-edit"></i>Editar Evento</Link>
                                        <button onClick={ () => deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}

export default CompMostrarevento;