import React from 'react'

import './CartItens.css'

const CartItens = ({ produto }) => {

    return (
        <>
            {console.log(produto)}

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
                        <strong className="part_value">Valor: R${produto.valor}</strong>
                    </div>

                </div>

            </div>

        </>

    )

}

export default CartItens