import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import CategoriaService from '../../../services/CategoriaService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'


import axios from 'axios'

const InputCadastrarCategoria = () => {
    const categoriaService = new CategoriaService();
    const history = useHistory();

    const handleSubmit = values => {

        const data = {
            nome: values.nomecategoria,
            descricao: values.descricao
        }



        categoriaService.createCategoria(data).then((resp) => { history.push('/ListarCategoria') }).catch(error => console.log('Deu errado', error))
    }
    const validations = yup.object().shape({
        nomecategoria: yup.string().min(5, '5 Caracteres no minimo').required('Informe o nome'),
        descricao: yup.string().required('Campo obrigatório.')
    });


    return (
        <>
            <p>Preencha os campos abaixo para cadastrar um novo categoria</p>

            <Formik initialValues={{ nome: '', descricao: '' }} onSubmit={handleSubmit} validationSchema={validations}  >
                <Form className="Form">

                    <div className="produtoCampo">
                        <p>Informações do Produto</p>

                        <div className="Form_Group">
                            <Field name="nomecategoria" className="Form_Field" placeholder="Nome" /> <br />
                            <ErrorMessage component="span" name="nomecategoria" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="descricao" className="Form_Field" placeholder="descrição" /> <br />
                            <ErrorMessage component="span" name="descricao" className="Form_Error" />
                        </div>

                        <button className="Form_Btn" type="submit">Cadastrar</button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}

export default InputCadastrarCategoria