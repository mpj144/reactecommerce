import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ClienteService from '../../../services/ClienteService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import './Input.scss'

import Modal from 'react-modal'
import './Modal.scss'

const InputDeletarCliente = () => {

    const [apagou, setApagou] = useState(false);
    const clienteService = new ClienteService();


    const handleSubmit = values => {
        clienteService.deleteClienteId(values.valor).then(()=>setApagou(true))
    }
    const validations = yup.object().shape({
        id: yup.number().min(1).required()
    })
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <p>Digite o id do Cliente desejado, abaixo!</p>

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


                        <p>Cliente Deltado</p>
                        

                        <button onClick={() => setApagou(false)} >Fechar</button>

                    </Modal>


                </Form>
            </Formik>

        </>
    )
}

export default InputDeletarCliente