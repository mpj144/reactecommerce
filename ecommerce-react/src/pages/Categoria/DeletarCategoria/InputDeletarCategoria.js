import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CategoriaService from '../../../services/CategoriaService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import './Input.scss'

import Modal from 'react-modal'
import './Modal.scss'

const InputDeletarCategoria = () => {

    const [apagou, setApagou] = useState(false);
    const categoriaService = new CategoriaService();


    const handleSubmit = values => {
        categoriaService.deleteCategoriaId(values.valor).then(()=>setApagou(true))
    }
    const validations = yup.object().shape({
        id: yup.number().min(1).required()
    })
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <p>Digite o id do Categoria desejado, abaixo!</p>

            <Formik onSubmit={handleSubmit} validationSchema={validations} initialValues={[]} >
                <Form className="Form">
                    <div className="caixa">
                        <div className="Form_Group">
                            <Field name="valor" className="Form_Field" />
                            <ErrorMessage component="span" name="valor" className="Form_Error" />
                        </div>

                        <button className="Form_Btn" type="submit" onClick={() => setModalIsOpen(true)}>Deletar</button>
                    </div>
                   


                    <Modal isOpen={apagou} className="Modal_Form">


                        <p>Categoria Deltado</p>
                        

                        <button onClick={() => setApagou(false)} >Fechar</button>

                    </Modal>


                </Form>
            </Formik>

        </>
    )
}

export default InputDeletarCategoria