import React, {useState, useEffect} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import CategoriaService from '../../services/CategoriaService'

const TableCategorias = (props) => {
    const [categorias,setCategorias] = useState([]);
    const categoriaService = new CategoriaService();

    useEffect(()=>{
        categoriaService.getCategoria().then(data=> setCategorias(data));
    },[]);


    return(
        <div>
            <div>
                <DataTable className="card" value={categorias}>
                    <Column field="id" header="Código"></Column>
                    <Column field="nome" header="Nome"></Column>
                    <Column field="descricao" header="Descrição"></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default TableCategorias