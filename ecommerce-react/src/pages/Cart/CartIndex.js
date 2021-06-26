import React, { useState, useEffect } from 'react'
import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Footer from '../../components/footer/footer';
import CartItens from './CartItens'

import { valorTotal } from './CartItens'
import { Button } from 'primereact/button';

import { BiTrash } from 'react-icons/bi'

const Cart = () => {

    const [cartItens, setCartItens] = useState(() => {
        const storageCart = localStorage.getItem('carrinhoItens')

        if (storageCart) {
            return JSON.parse(storageCart)

        }
        else {
            return [];
        }

    });

    const priceBodyTemplate = (values) => {
        return formatCurrency(values);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }



    function getTotal() {
        let total = 0
        cartItens.map((produto) => total = total + produto.valor)
        return total;
    }

    const handleClickClearCart = () => {
        localStorage.removeItem('carrinhoItens')
        document.location.reload(true)
    }

    const CartIsEmpyt = () => {

        if (cartItens.length > 0) {
            let position = 0
            return (
                <>

                    <div className="header_produto">

                        <div className="form_value">
                            <h3 className="titlle_value">Valor Total: {priceBodyTemplate(getTotal())}  </h3>
                        </div>

                        <div className="form_titlle">
                            <h1 className="titlle_cart">Carrinho</h1>
                        </div>

                        <div className="form_btn">
                            <p className="nome_botao">Limpar Carrinho</p>
                            <Button
                                type="button"
                                className="btn_limparCarrinho"
                                onClick={() => handleClickClearCart()}>
                                <BiTrash className="icon_btn" />
                            </Button>
                        </div>

                    </div>

                    {cartItens.map((produto) => <CartItens produto={produto} position={position++} />)}

                </>
            )
        }
        else {
            return <h2>Carrinho Vazio</h2>
        }
    }

    return (

        <>

            <Header />
            <Container>

                <div className="div_card">

                    <div className="sub_div">

                        <CartIsEmpyt />

                    </div>
                </div>


            </Container>
            <Footer />

        </>

    )

}

export default Cart