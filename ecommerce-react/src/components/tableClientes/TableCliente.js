import React, {useState, useEffect} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import ClienteService from '../../services/ClienteService'

const TableClientes = (props) => {
    const [clientes,setClientes] = useState([]);
    const clienteService = new ClienteService();

    useEffect(()=>{
        clienteService.getCliente().then(data => setClientes(data));
    },[]);

    return(
        <div>
            <div>
                <DataTable className="card" value={clientes}>
                    <Column field="id" header="Id"></Column>
                    <Column firld="nome" header="Nome"></Column>
                    <Column field="usuario" header="User"></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default TableClientes