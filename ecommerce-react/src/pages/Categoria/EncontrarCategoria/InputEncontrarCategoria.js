import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CategoriaService from '../../../services/CategoriaService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import './Input.scss'

import Modal from 'react-modal'
import './Modal.scss'

const InputEncontarCategoria = () => {

    const [categorias, setCategorias] = useState(0);
    const categoriaService = new CategoriaService();


    const handleSubmit = values => {

        categoriaService.getCategoriaById(values.valor).then(resp => setCategorias(resp))
    }
    const validations = yup.object().shape({
        id: yup.number().min(1).required()
    })
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <p>Digite o código do Categoria desejado, abaixo!</p>

            <Formik onSubmit={handleSubmit} validationSchema={validations} initialValues={{ valor: '' }} >
                <Form className="Form-Funcionario">
                    <div className="caixa">
                        <div className="Form_Group">
                            <Field name="valor" className="Form_Field" />
                            <ErrorMessage component="span" name="valor" className="Form_Error" />
                        </div>
                    </div>

                    <button className="Form_Btn" type="submit" onClick={() => setModalIsOpen(true)}>Procurar</button>

                    <Modal isOpen={Boolean(categorias)} className="Modal_Form">


                        <p><strong>Código: </strong>{categorias.id}</p>
                        <p><strong>Nome: </strong>{categorias.nome}</p>
                        <p><strong>Descrição: </strong>{categorias.descricao}</p>


                        <button onClick={() => setCategorias(false)} >Fechar</button>

                    </Modal>


                </Form>
            </Formik>

        </>
    )
}

export default InputEncontarCategoria