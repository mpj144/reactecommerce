import React, {useState, useEffect} from 'react';
import ClienteService from '../../services/ClienteService'

const ClienteDelete = (props) => {
    const [cliente, setCliente] = useState(0);
    const clienteService = new ClienteService();
    const id = props.id

    useEffect(()=>{
    
    clienteService.deleteClienteId(id).then();//.then(data => setClientes(data)); 
     },[]);
     
    return(
        <div>
            <div>
                <h1>Cliente Deletado</h1>
            </div>
        </div>
    )
}

export default ClienteDelete