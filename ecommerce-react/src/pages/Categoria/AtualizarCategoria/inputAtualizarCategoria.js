import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import CategoriaService from '../../../services/CategoriaService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
//import '../Input.scss'

import axios from 'axios'

const InputAtualizarCategoria = () => {
    const categoriaService = new CategoriaService();
    const history = useHistory();


    const handleSubmit = values => {

        const data = {
                id: values.id,
                nome: values.nome,
                descricao: values.descricao
            }
    

        console.log('valor da data: ', data)

        categoriaService.updateCategoria(data,values.id).then((resp) => alert('Categoria atualizado com sucesso'), history.push('/ListarCategoria')).catch(error => console.log('Deu errado', error))
        }
    const validations = yup.object().shape({
        id: yup.number().min(1).required(),
        nome: yup.string()
                        .min(2,'Nome deve conter 5 ou mais caracteres')
                        .max(60,'Nome deve conter 60 ou menos caracteres')
                        .required('Informe o nome'),
        
        descricao: yup.string()
                        .min(5,'A descrição deve conter no minimo 5 ou mais caracteres')
                        .max(100,'A descrição deve conter no maximo 100 caracteres')
                        .required('Informe uma descrição'),  
    });

    return (
        <>
            <p>Atualizar Categoria</p>
            <Formik initialValues={{ id:'',nome: '', descricao: ''}} onSubmit={handleSubmit} validationSchema={validations}  >
                <Form className="Form">                       
                        <div className="Caixa">
                            <div className="Form_Group">
                                <Field name="id" className="Form_Field" placeholder="código" />
                                <ErrorMessage component="span" name="nome" className="Form_Error" />
                            </div>
                            <div className="Form_Group">
                                <Field name="Nome" className="Form_Field" placeholder="nome" />
                                <ErrorMessage component="span" name="nome" className="Form_Error" />
                            </div>
                            <div className="Form_Group">
                                <textarea name="descricao" className="Form_Field" placeholder="descrição" />
                                <ErrorMessage component="span" name="descricao" className="Form_Error" />
                            </div>
                            <button className="Form_Btn" type="submit">Atualizar</button>
                        </div>          
                </Form>
            </Formik>

        </>
    )
}

export default InputAtualizarCategoria