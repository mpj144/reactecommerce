import React, {useState, useEffect} from 'react';
import ClienteService from '../../services/ClienteService'

const ClienteId = (props) => {
    const [cliente, setCliente] = useState(0);
    const clienteService = new ClienteService();
    const id = props.id

    useEffect(()=>{
    
    clienteService.getCienteId(id).then(res =>setCliente(res ));//.then(data => setClientes(data)); 
     },[]);
     
    return(
        <div>
            <div>
                <h1>{cliente.nome}</h1>
            </div>
        </div>
    )
}

export default ClienteId