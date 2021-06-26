import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ClienteService from '../../../services/ClienteService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import '../Input.scss'

import axios from 'axios'

const InputAtualizarCliente = () => {
    const clienteService = new ClienteService();
    const history = useHistory();

    //const [nome, setNome] = useState('')
    //const [cpf, setCpf] = useState('')

    const handleSubmit = values => {

        const data = {
            endereco: {
                rua: values.rua,
                numero: values.numero,
                complemento: values.complemento,
                bairro: values.bairro,
                cidade: values.cidade,
                estado: values.estado,
                cep: values.cep
            },
            nome: values.nome,
            usuario: values.usuario,
            email: values.email,
            cpf: values.cpf,
            dataNascimento: values.niver + 'T00:00:00Z'

        }

        console.log('valor da data: ', data)

        clienteService.updateCliente(data, values.id).then((resp) => alert('Cliente atualizado com sucesso'), history.push('/ListarCliente')).catch(error => console.log('Deu errado', error))
    }
    const validations = yup.object().shape({
        nome: yup.string()
            .min(5, 'Nome deve conter 5 ou mais caracteres')
            .max(60, 'Nome deve conter 60 ou menos caracteres'),
        usuario: yup.string().min(6, 'Usuario deve conter 6 ou mais caracteres'),
        email: yup.string().email('Insira um email valido'),
        cpf: yup
            .string()
            .matches(/^['0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']+[''0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']$/, 'Só pode conter números!')
            .min(11, 'Número de CPF muito pequeno!')
            .max(11, 'Número de CPF muito grande!'),

        rua: yup
            .string()
            .min(4, 'deve conter 4 ate 60 caracteres')
            .max(60, 'grande'),
        numero: yup
            .string()
            .min(1, 'deve conter 1 ate 20 caracteres')
            .max(20, 'grande'),
        complemento: yup
            .string()
            .max(30, 'grande'),
        bairro: yup
            .string()
            .max(40, 'grande'),
        cidade: yup
            .string()
            .min(3, 'deve conter 3 ate 40 caracteres')
            .max(40, 'grande'),
        estado: yup
            .string()
            .min(0, 'pequeno')
            .max(2, 'grande'),
        cep: yup
            .string(),
        niver: yup
            .string()

    });


    return (
        <>


            <Formik initialValues={{ id: '', nome: '', usuario: '', email: '', cpf: '', rua: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '', cep: '', niver: '' }} onSubmit={handleSubmit} validationSchema={validations}  >
                <Form className="Form">



                    <div className="enderecoCampo">
                        <p>Informações do endereço</p>
                        <div className="Form_Group">
                            <Field name="rua" className="Form_Field" placeholder="Rua" />
                            <ErrorMessage component="span" name="rua" className="Form_Error" />
                        </div>
                        <div className="Form_Group">
                            <Field name="numero" className="Form_Field" placeholder="Numero" />
                            <ErrorMessage component="span" name="numero" className="Form_Error" />
                        </div>
                        <div className="Form_Group">
                            <Field name="complemento" className="Form_Field" placeholder="Complemento" />
                            <ErrorMessage component="span" name="complemento" className="Form_Error" />
                        </div>
                        <div className="Form_Group">
                            <Field name="bairro" className="Form_Field" placeholder="Bairro" />
                            <ErrorMessage component="span" name="bairro" className="Form_Error" />
                        </div>
                        <div className="Form_Group">
                            <Field name="cidade" className="Form_Field" placeholder="Cidade" />
                            <ErrorMessage component="span" name="cidade" className="Form_Error" />
                        </div>
                        <div className="Form_Group">
                            <Field name="estado" className="Form_Field" placeholder="Estado" />
                            <ErrorMessage component="span" name="estado" className="Form_Error" />
                        </div>
                        <div className="Form_Group">
                            <Field name="cep" className="Form_Field" placeholder="CEP" />
                            <ErrorMessage component="span" name="cep" className="Form_Error" />
                        </div>
                    </div>
                    <div className="clienteCampo">
                        <p>Informações do Cliente</p>
                        <div className="Form_Group">
                            <Field name="id" className="Form_Field" placeholder="Id" />
                            <ErrorMessage component="span" name="id" className="Form_Error" />
                        </div>
                        <div className="Form_Group">
                            <Field name="nome" className="Form_Field" placeholder="Nome" />
                            <ErrorMessage component="span" name="nome" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="usuario" className="Form_Field" placeholder="Usuario" />
                            <ErrorMessage component="span" name="usuario" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="email" className="Form_Field" placeholder="E-mail" />
                            <ErrorMessage component="span" name="email" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="cpf" className="Form_Field" placeholder="CPF" />
                            <ErrorMessage component="span" name="cpf" className="Form_Error" />
                        </div>
                        <div className="Form_Group">
                            <Field name="niver" input type="date" className="Form_Field" placeholder="Aniversário" />
                            <ErrorMessage component="span" name="niver" className="Form_Error" />
                        </div>
                        <button className="Form_Btn" type="submit">Cadastrar</button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}

export default InputAtualizarCliente