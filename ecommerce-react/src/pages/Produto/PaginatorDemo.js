import React, { useState } from 'react';
import { Paginator } from 'primereact/paginator';
import './PaginatorDemo.css';
import '../../components/tableProdutos/TableProduto'
import { BiSkipNext } from 'react-icons/bi'

const PaginatorDemo = () => {
 
    const [contentFirst, setContentFirst] = useState(0);
    const [contentRows, setContentRows] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    // const template = {
    //     layout: "PrevPageLink NextPageLink", 
    //     "PrevPageLink": (options)=>{
    //         options.iconsClassName = "BiSkipNext";
    //     return CustomElement;
    //     } 
        
    // } 

    const onContentPageChange = (event) => {
        setContentFirst(event.first);
        setContentRows(event.rows);
    }

    return (
        <div className="paginator-demo">
            <div className="card">

                <h2>Alguns dos nossos produtos</h2>

                <div className="botoes">

                    <Paginator first={contentFirst} rows={1} totalRecords={5} onPageChange={onContentPageChange}
                    
                    template='FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink'>
                        
                    </Paginator>

                </div>

                <div className="image-gallery">
                    <img className="foto" alt={contentFirst} src={`https://ecommerce-api-g5.herokuapp.com/produto/${contentFirst + 1}/foto`} onError={(e) => e.target.src = 'https://ecommerce-api-g5.herokuapp.com/produto'} />
                </div>
            </div>
        </div>
    );
}

export default PaginatorDemo