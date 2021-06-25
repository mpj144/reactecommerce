import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ProdutoService from '../../../services/ProdutoService'
import FuncionarioService from '../../../services/FuncionarioService'
import CategoriaService from '../../../services/CategoriaService'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import '../Input.scss'

import axios from 'axios'

const InputCadastrarProduto = () => {
    const produtoService = new ProdutoService();
    const funcionarioService = new FuncionarioService();
    const categoriaService = new CategoriaService();
    const history = useHistory();

    const [listFuncionarios, setListFuncionarios] = useState([]);
    const [listCategorias, setlistCategorias] = useState([]);

    //const [nome, setNome] = useState('')
    //const [cpf, setCpf] = useState('')

    const handleSubmit = values => {

        const data = {
            nome: values.nome,
            descricao: values.descricao,
            qtdEstoque: parseInt(values.qtdEstoque),
            valor: parseFloat(values.valor),
            idCategoria: parseInt(values.categoria),
            idFuncionario: parseInt(values.funcionario),
            dataFabricacao: values.dataFabricacao + 'T00:00:00Z'
            // fotoLink:values.foto   
        }

        console.log(data)

        produtoService.createProduto(data).then((resp) => alert('Produto cadastrado com sucesso'), history.push('/ListarProduto')).catch(error => console.log('Deu erro', error))
    }
    const validations = yup.object().shape({
        nome: yup.string()
            .min(5, 'Nome deve conter 5 ou mais caracteres')
            .max(60, 'Nome deve conter 60 ou menos caracteres')
            .required('Informe o nome'),
        descricao: yup.string()
            .min(5, 'A descrição deve conter 10 ou mais caracteres')
            .max(60, 'Nome deve conter 100 ou menos caracteres')
            .required('Informe a descricao'),

    });

    useEffect(() => {
        funcionarioService.getFuncionario().then(dataFuncionario => setListFuncionarios(dataFuncionario))
    }, []);

    function OpcaoFuncionario({ funcionario }) {

        return (
            <option value={funcionario.id}>{funcionario.nome}</option>
        )
    }

    useEffect(() => {
        categoriaService.getCategoria().then(dataCategoria => setlistCategorias(dataCategoria))
    }, []);


    function OpcaoCategoria({ categoria }) {

        return (
            <option value={categoria.id}>{categoria.nome}</option>
        )
    }


    return (
        <>


            <Formik initialValues={{ nome: '', descricao: '', valor: '' }} onSubmit={handleSubmit} validationSchema={validations}  >
                <Form className="Form">

                    <div className="produtoCampo">
                        <p>Informações do Produto</p>

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

                        {/* <div className="Form_Group">
                            <Field name="idCategoria" className="Form_Field" placeholder="Id Categoria" />
                            <ErrorMessage component="span" name="idCategoria" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="nomeCategoria" className="Form_Field" placeholder="Nome Categoria" />
                            <ErrorMessage component="span" name="nomeCategoria" className="Form_Error" />
                        </div> */}

                        <div className="Form_Group">
                            <Field name="categoria" as="select" className="Form_Field" placeholder="Categoria" >
                                <option value="">Selecione uma categoria</option>

                                {listCategorias.map((categoria) => (<OpcaoCategoria categoria={categoria} />))}

                            </Field> <br />
                            <ErrorMessage component="span" name="categoria" className="Form_Error" />
                        </div>

                        {/* <div className="Form_Group">
                            <Field name="idFuncionario" className="Form_Field" placeholder="Id Funcionario" />
                            <ErrorMessage component="span" name="idFuncionario" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="nomeFuncionario" className="Form_Field" placeholder="Nome Funcionario" />
                            <ErrorMessage component="span" name="nomeFuncionario" className="Form_Error" />
                        </div> */}

                        <div className="Form_Group">
                            <Field name="funcionario" as="select" className="Form_Field" placeholder="Funcionario" >
                                <option value="">Selecione um funcionario</option>

                                {listFuncionarios.map((funcionario) => (<OpcaoFuncionario funcionario={funcionario} />))}

                            </Field> <br />

                            <ErrorMessage component="span" name="funcionario" className="Form_Error" />
                        </div>

                        <div className="Form_Group">
                            <Field name="dataFabricacao" input type="date" className="Form_Field" placeholder="Data Fabricacao" />
                            <ErrorMessage component="span" name="dataFabricacao" className="Form_Error" />
                        </div>

                        <button className="Form_Btn" type="submit">Cadastrar</button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}

export default InputCadastrarProduto