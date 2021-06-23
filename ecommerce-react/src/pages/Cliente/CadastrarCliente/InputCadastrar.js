import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ClienteService from '../../../services/ClienteService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import '../Input.scss'

import axios from 'axios'

const InputCadastrarCliente = () => {
    const clienteService = new ClienteService();
    const history = useHistory();

    //const [nome, setNome] = useState('')
    //const [cpf, setCpf] = useState('')

    const handleSubmit = values => {

        const data = {
            endereco:{
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
            dataNascimento:values.niver+'T00:00:00Z'
            
        }

        console.log('valor da data: ', data)

        clienteService.createCliente(data).then((resp) => alert('Cliente cadastrado com sucesso'), history.push('/ListarCliente')).catch(error => console.log('Deu errado', error))
    }
    const validations = yup.object().shape({
        nome: yup.string()
                        .min(5,'Nome deve conter 5 ou mais caracteres')
                        .max(60,'Nome deve conter 60 ou menos caracteres')
                        .required('Informe o nome'),
        usuario: yup.string().required('Escolha um nome de usuário'),
        email:   yup.string()
                    .min(4,'E-mail deve conter 4 ou mais caracteres')
                    .max(30,'E-mail deve conter 30 ou menos caracteres')
                    .required('Insira um E-mail'),
        cpf: yup
            .string()
            .matches(/^['0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']+[''0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']$/, 'Só pode conter números!')
            .min(11, 'Número de CPF muito pequeno!')
            .max(11, 'Número de CPF muito grande!')
            .required('Campo obrigatório.'),
        
            rua: yup
                .string()
                .min(4,'pequeno')
                .max(60,'grande')
                .required('Campo obrigatório.'),
            numero: yup
                    .string()
                    .min(1,'pequeno')
                    .max(20,'grande')
                    .required('Campo obrigatório.'),
            complemento: yup
                        .string()
                        .max(30,'grande'),
            bairro: yup
                    .string()
                    .max(40,'grande'),
            cidade: yup
                    .string()
                    .min(3,'pequeno')
                    .max(40,'grande')
                    .required('Campo obrigatório.'),
            estado: yup
                    .string()
                    .min(0,'pequeno')
                    .max(2,'grande')
                    .required('Campo obrigatório.'),
            cep: yup
                .string()
                .required('Campo obrigatório.'),
        
        niver: yup
                .string()
                .required('Coloque uma data')
    });


    return (
        <>
            

            <Formik initialValues={{ nome: '', usuario: '', email: '', cpf: '' ,rua:'',numero:'',complemento:'',bairro:'',cidade:'',estado:'',cep:'',niver:''}} onSubmit={handleSubmit} validationSchema={validations}  >
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
                                <Field name="niver" input type="date"className="Form_Field" placeholder="Aniversário" />
                                <ErrorMessage component="span" name="niver" className="Form_Error" />
                            </div>
                            <button className="Form_Btn" type="submit">Cadastrar</button>
                        </div>          
                </Form>
            </Formik>

        </>
    )
}

export default InputCadastrarCliente