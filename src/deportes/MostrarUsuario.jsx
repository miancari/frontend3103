import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import styles from "*/styles.module.css";
import { Table } from "react-bootstrap";
import { FaTrashAlt, FaRegEdit, FaFileContract } from 'react-icons/fa';
import { BsArrowsAngleContract, BsPlusCircleFill } from "react-icons/bs";
import Swal from 'sweetalert2'

const URI = 'http://localhost:8000/usuarios/mos_usuario/'
const URI2 = 'http://localhost:8000/usuarios/borr_usuario/'

export const CompMostrarUsuario = () => {
    useEffect(() => {
        falerta()
    })
    const falerta =() => {
        Swal.fire("Este es un ejemplo de Alert")
    }

    //Aca inicia el código que envia el encabezado del token
    const token1 = localStorage.getItem("auth")
    const token = `${token1}`;
    const beer = "Bearer"
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'accept': 'application/json',
            'Authorization': `${beer} ${token}`,    
        }
    };

    //aca finaliza

    const [users, setBlog] = useState([])
    useEffect( ()=> {
        getBlogs()
    },[])

    //procedimiento para mostrar los registros
    const getBlogs = async () => {
        const res = await axios.get(URI,axiosConfig)
        setBlog(res.data)
    }

    //procedimiento para eliminar un registro
    const deleteBlog = async (id) => {
        await axios.delete(`${URI2}${id}`)
        getBlogs()
    }

    return(
        <div>
            <div>
                <div>
                    <Link to="/regusuario" className='btn btn-primary mt-2 mb-2'><BsPlusCircleFill  size = "35" color = "red" /></Link>
                    <Table striped bordered hover size="sm">
                        <thead className='thead tr:first-child'>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ((blog) => (
                                <tr key={ blog._id}>
                                    <td> { blog.nom_usuario } </td>
                                    <td> { blog.correo } </td>
                                    <td> 
                                        <Link to={`/editarusuario/${blog._id}`} className=''><FaRegEdit size = "30" color = "blue" /></Link>
                                    </td>
                                    <td>    
                                        <button onClick={ () => deleteBlog(blog._id) } className='btn btn-danger'><FaTrashAlt /></button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>

                </div>

            </div>
        </div>
    )
}

export default CompMostrarUsuario;