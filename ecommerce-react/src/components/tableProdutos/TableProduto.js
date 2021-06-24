import React, {useState, useEffect} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import ProdutoService from '../../services/ProdutoService'

const TableProdutos = (props) => {
    const [produtos,setProdutos] = useState([]);
    const produtoService = new ProdutoService();

    useEffect(()=>{
        produtoService.getProduto().then(data => setProdutos(data));
    },[]);


    return(
        <div>
            <div>
                <DataTable className="card" value={produtos}>
                    <Column field="id" header="Id"></Column>
                    <Column field="nome" header="Nome"></Column>
                    <Column field="valor" header="Valor"></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default TableProdutos