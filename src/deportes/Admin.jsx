import { Link } from "react-router-dom";

export const Admin = () => {

    return(
<div className="login-form">
    <h3><Link to="/regevento" className="btn-register">Registrar Eventos Deportivos</Link></h3>
    <h3><Link to="/mevento" className='btn-register'>Ver Eventos Deportivos</Link></h3>
</div>
    )

}

export default Admin;
