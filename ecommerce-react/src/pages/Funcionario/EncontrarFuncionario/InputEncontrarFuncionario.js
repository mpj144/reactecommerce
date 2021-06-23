import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import FuncionarioService from '../../../services/FuncionarioService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import '../Input.scss'

import Modal from 'react-modal'
import './Modal.scss'

const InputEncontarFuncionario = () => {

    const [funcionarios, setFuncionarios] = useState(0);
    const funcionarioService = new FuncionarioService();


    const handleSubmit = values => {
        funcionarioService.getFuncionarioById(values.valor).then(resp => setFuncionarios(resp))
    }
    const validations = yup.object().shape({
        id: yup.number().min(1).required()
    })
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <p>Digite o id do Funcionario desejado, abaixo!</p>

            <Formik onSubmit={handleSubmit} validationSchema={validations} initialValues={[]} >
                <Form className="Form">

                    <div className="Form_Group">
                        <Field name="valor" className="Form_Field" />
                        <ErrorMessage component="span" name="valor" className="Form_Error" />
                    </div>

                    <button className="Form_Btn" type="submit" onClick={() => setModalIsOpen(true)}>Procurar</button>


                    <Modal isOpen={Boolean(funcionarios)} className="Modal_Form">


                        <p><strong>ID: </strong>{funcionarios.id}</p>
                        <p><strong>Nome: </strong>{funcionarios.nome}</p>
                        <p><strong>CPF: </strong>{funcionarios.cpf}</p>


                        <button onClick={() => setFuncionarios(false)} >Fechar</button>

                    </Modal>


                </Form>
            </Formik>

        </>
    )
}

export default InputEncontarFuncionario