import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProdutoService from '../../services/ProdutoService';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { BiCart } from 'react-icons/bi'
import './ProdutoVitrine.css';

const DataTableTemplatingDemo = () => {
    const [products, setProducts] = useState([]);
    const produtoService = new ProdutoService();

    const [cartItens, setCartItens] = useState(() => {
        const storageCart = localStorage.getItem('carrinhoItens')

        if (storageCart) {
            return JSON.parse(storageCart)
        }
        else {
            return [];
        }

    }, []);

    useEffect(() => {
        produtoService.getProduto().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    //const formatCurrency = (value) => {
    //    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    //}

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.fotoLink} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }

    async function addCartIten(produtoRecebido) {

        setCartItens([...cartItens, produtoRecebido])
        document.location.reload(true)

    }

    const actionTemplate = (rowData, column) => {
        return (
            <>
                <Button
                    type="button"
                    className="btn_comprar"
                    onClick={() => addCartIten(rowData)}
                > <BiCart /> Add Carrinho </Button>
            </>
        );
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.valor);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }


    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    const header = (
        <div className="table-header">
            <h2>Produtos</h2>
        </div>
    );

    //const footer = `In total there are ${products ? products.length : 0} products.`;

    return (

        <div className="datatable-templating-demo">
            {localStorage.setItem('carrinhoItens', JSON.stringify(cartItens))}
            <div className="card">


                <DataTable className="tabela" value={products} header={header}>
                    <Column className="coluna" field="nome" header="Nome"></Column>
                    <Column className="coluna" header="Imagem" body={imageBodyTemplate}></Column>
                    <Column className="coluna" body={priceBodyTemplate} header="Valor"></Column>
                    <Column className="coluna" field="nomeCategoria" header="Categoria"></Column>
                    <Column className="coluna" body={actionTemplate} header=""></Column>
                </DataTable>
            </div>
        </div>
    );
}
export default DataTableTemplatingDemo