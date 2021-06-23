import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ClienteService from '../../../services/ClienteService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import './Input.scss'

import Modal from 'react-modal'
import './Modal.scss'

const InputEncontarCliente = () => {

    const [cliente, setCliente] = useState(0);
    const clienteService = new ClienteService();


    const handleSubmit = values => {
        clienteService.getCienteId(values.valor).then(resp => setCliente(resp))
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

                    <div className="Form_Group">
                        <Field name="valor" className="Form_Field" />
                        <ErrorMessage component="span" name="valor" className="Form_Error" />
                    </div>

                    <button className="Form_Btn" type="submit" onClick={() => setModalIsOpen(true)}>Procurar</button>


                    <Modal isOpen={Boolean(cliente)} className="Modal_Form">


                        <p><strong>ID: </strong>{cliente.id}</p>
                        <p><strong>Nome: </strong>{cliente.nome}</p>
                        <p><strong>CPF: </strong>{cliente.cpf}</p>


                        <button onClick={() => setCliente(false)} >Fechar</button>

                    </Modal>


                </Form>
            </Formik>

        </>
    )
}

export default InputEncontarCliente