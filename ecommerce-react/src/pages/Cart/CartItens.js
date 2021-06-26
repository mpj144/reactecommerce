import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import './CartItens.css'

export var valorTotal = 0;



const CartItens = ({ produto, position }) => {

    const [cartItens, setCartItens] = useState(() => {
        const storageCart = localStorage.getItem('carrinhoItens')

        if (storageCart) {
            return JSON.parse(storageCart)

        }
        else {
            return [];
        }

    }, []);

    function handleActionRemove(produtoId) {

        console.log(produtoId)

        const indexProduto = cartItens.findIndex((produto) => produto.id == produtoId);
        cartItens.splice(indexProduto, 1)
        localStorage.setItem('carrinhoItens', JSON.stringify(cartItens))
        // console.log(localStorage.getItem('carrinhoItens'))
        document.location.reload(true)
    }

    const priceBodyTemplate = (values) => {
        return formatCurrency(values);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <>

            <div className="main_body">

                <aside>
                    <img src={produto.fotoLink} alt="" />
                </aside>

                <div className="infos_produto">
                    <div className="infos_produtop1">
                        <h3>Nome: {produto.nome}</h3>
                        <p> <strong>Descricao: </strong>  {produto.descricao}</p>
                        <p> <strong>Categoria: </strong> {produto.nomeCategoria}</p>

                    </div>

                    <div className="infos_produtop2">
                        <strong className="part_value">{priceBodyTemplate(produto.valor)}</strong>
                        <button className="remove_btn" type="button" onClick={() => handleActionRemove(produto.id)}> <BiTrash ></BiTrash></button>
                    </div>


                </div>

            </div>
        </>

    )

}

export default CartItens