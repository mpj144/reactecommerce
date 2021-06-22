import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import FuncionarioService from '../../../services/FuncionarioService'

import './TabelaFuncionarios.scss'

const TabelaFuncionarios = (props) => {
    const [funcionarios, setFuncionarios] = useState([]);
    const funcionarioService = new FuncionarioService();

    useEffect(() => {
        funcionarioService.getFuncionario().then(data => setFuncionarios(data));
    }, []);

    return (
        <DataTable className="card" value={funcionarios}>
            <Column field="id" header="ID" className="card_column"></Column>
            <Column field="nome" header="Nome" className="card_column"></Column>
            <Column field="cpf" header="cpf" className="card_column"></Column>
        </DataTable>
    )
}

export default TabelaFuncionarios