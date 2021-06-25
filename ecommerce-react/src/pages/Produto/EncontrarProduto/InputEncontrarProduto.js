import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProdutoService from '../../../services/ProdutoService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import '../Input.scss'

import Modal from 'react-modal'
import './Modal.scss'

const InputEncontarProduto = () => {

    const [produtos, setProdutos] = useState(0);
    const produtoService = new ProdutoService();


    const handleSubmit = values => {
        produtoService.getProdutoById(values.valor).then(resp => setProdutos(resp))
    }
    const validations = yup.object().shape({
        valor: yup.number('Valor precisa ser um numero')
            .min(1, 'Campo obrigatório.')
            .required('Campo obrigatório.')
    })
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <p>Digite o id do Produto desejado, abaixo!</p>

            <Formik onSubmit={handleSubmit} validationSchema={validations} initialValues={{ valor: '' }} >
                <Form className="Form-Funcionario">

                    <div className="Form_Group-Funcionario">
                        <Field name="valor" className="Form_Field-Funcionario" /> <br />
                        <ErrorMessage component="span" name="valor" className="Form_Error-Funcionario" />
                    </div>

                    <button className="Form_Btn" type="submit" onClick={() => setModalIsOpen(true)}>Procurar</button>


                    <Modal isOpen={Boolean(produtos)} className="Modal_Form">


                        <p><strong>ID: </strong>{produtos.id}</p>
                        <p><strong>Nome: </strong>{produtos.nome}</p>
                        <p><strong>Valor: </strong>{produtos.valor}</p>


                        <button onClick={() => setProdutos(false)} >Fechar</button>

                    </Modal>


                </Form>
            </Formik>

        </>
    )
}

export default InputEncontarProduto