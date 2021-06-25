import React, { useState, useEffect } from 'react'
import Header from '../../components/header/header';
import Container from '../../components/container/container';
import Footer from '../../components/footer/footer';
import CartItens from './CartItens'

const Cart = () => {

    const [cartItens, setCartItens] = useState([]);

    useEffect(() => {

        const storageCart = localStorage.getItem('carrinhoItens')

        if (storageCart) {
            setCartItens(JSON.parse(storageCart))
        }
        else {
            setCartItens([]);
        }

    }, []);


    const handleAction = () => {
        console.log(cartItens)
    }

    return (
        <>
            <Header />
            <Container>

                <div className="div_card">
                    <div className="sub_div">
                        <h1>Carrinho</h1>

                        {cartItens.map((produto) => <CartItens produto={produto} />)}

                    </div>
                </div>


            </Container>
            <Footer />

        </>

    )

}

export default Cart