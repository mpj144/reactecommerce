import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FuncionarioService from '../../../services/FuncionarioService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import '../Input.scss'

import axios from 'axios'

const InputCadastrarFuncionario = () => {
    const funcionarioService = new FuncionarioService();
    const history = useHistory();

    //const [nome, setNome] = useState('')
    //const [cpf, setCpf] = useState('')

    const handleSubmit = values => {

        const data = {
            nome: values.nomeFunc,
            cpf: values.cpf
        }

        console.log('valor da data: ', data)

        funcionarioService.createFuncionario(data).then((resp) => { history.push('/ListarFuncionario') }).catch(error => console.log('Deu errado', error))
    }
    const validations = yup.object().shape({
        nomeFunc: yup.string()
            .min(5, 'Nome muito pequeno!')
            .max(60, 'Nome muito grande!')
            .required('Informe o nome'),
        cpf: yup
            .string()
            .matches(/^['0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']+[''0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']$/, 'Só pode conter números!')
            .min(11, 'Número de CPF muito pequeno!')
            .max(11, 'Número de CPF muito grande!')
            .required('Campo obrigatório.')
    });


    return (
        <>
            <p>Preencha os campos abaixo para cadastrar um novo funcionario</p>

            <Formik initialValues={{ nomeFunc: '', cpf: '' }} onSubmit={handleSubmit} validationSchema={validations}  >
                <Form className="Form">

                    <div className="Form_Group">
                        <Field name="nomeFunc" className="Form_Field" placeholder="Nome" /> <br />
                        <ErrorMessage component="span" name="nomeFunc" className="Form_Error" />
                    </div>

                    <div className="Form_Group">
                        <Field name="cpf" className="Form_Field" placeholder="CPF" /> <br />
                        <ErrorMessage component="span" name="cpf" className="Form_Error" />
                    </div>

                    <button className="Form_Btn" type="submit">Cadastrar</button>

                </Form>
            </Formik>

        </>
    )
}

export default InputCadastrarFuncionario