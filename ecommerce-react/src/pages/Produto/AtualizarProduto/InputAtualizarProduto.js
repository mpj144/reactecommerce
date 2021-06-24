import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ProdutoService from '../../../services/ProdutoService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import '../Input.scss'

import axios from 'axios'

const InputAtualizarProduto = () => {
    const produtoService = new ProdutoService();
    const history = useHistory();

    //const [nome, setNome] = useState('')
    //const [cpf, setCpf] = useState('')

    const handleSubmit = values => {

        const data = {
            nome: values.nome,
            descricao: values.descricao,
            qtdEstoque: parseInt(values.qtdEstoque),
            valor: parseFloat(values.valor),
            idCategoria: parseInt(values.idCategoria),
            nomeCategoria: values.nomeCategoria,
            idFuncionario: parseInt(values.idFuncionario),
            nomeFuncionario: values.nomeFuncionario,
            dataFabricacao: values.dataFabricacao + 'T00:00:00Z'

           // fotoLink:values.foto   
        }

        console.log(data)

        produtoService.updateProduto(data, values.id).then((resp) => alert('Produto atualizado com sucesso'), history.push('/ListarProduto')).catch(error => console.log('Deu erro', error))
    }
    const validations = yup.object().shape({
        nome: yup.string()
                        .min(5,'Nome deve conter 5 ou mais caracteres')
                        .max(60,'Nome deve conter 60 ou menos caracteres')
                        .required('Informe o nome'),
        descricao: yup.string()
                        .min(5,'A descrição deve conter 10 ou mais caracteres')
                        .max(60,'Nome deve conter 100 ou menos caracteres')
                        .required('Informe a descricao'),

    });


    return (
        <>
            

            <Formik initialValues={{id: '', nome: '', descricao: '', qtdEstoque:'', valor: ''}} onSubmit={handleSubmit} validationSchema={validations}  >
                <Form className="Form">
   
                    <div className="produtoCampo">
                        <p>Atualizar informações do Produto</p>

                        <div className="Form_Group">
                            <Field name="id" className="Form_Field" placeholder="Id" />
                            <ErrorMessage component="span" name="id" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="nome" className="Form_Field" placeholder="Nome" />
                            <ErrorMessage component="span" name="nome" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="descricao" className="Form_Field" placeholder="Descricao" />
                            <ErrorMessage component="span" name="descricao" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="qtdEstoque" className="Form_Field" placeholder="Quantidade Estoque" />
                            <ErrorMessage component="span" name="qtdEstoque" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="valor" className="Form_Field" placeholder="Valor" />
                            <ErrorMessage component="span" name="valor" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="idCategoria" className="Form_Field" placeholder="Id Categoria" />
                            <ErrorMessage component="span" name="idCategoria" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="nomeCategoria" className="Form_Field" placeholder="Nome Categoria" />
                            <ErrorMessage component="span" name="nomeCategoria" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="idFuncionario" className="Form_Field" placeholder="Id Funcionario" />
                            <ErrorMessage component="span" name="idFuncionario" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="nomeFuncionario" className="Form_Field" placeholder="Nome Funcionario" />
                            <ErrorMessage component="span" name="nomeFuncionario" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                                <Field name="dataFabricacao" input type="date" className="Form_Field" placeholder="Data Fabricacao" />
                                <ErrorMessage component="span" name="dataFabricacao" className="Form_Error" />
                        </div>
                        <button className="Form_Btn" type="submit">Atualizar</button>
                    </div>          
                </Form>
            </Formik>

        </>
    )
}

export default InputAtualizarProduto