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

        }

        const element = document.getElementById('image')
        const file = element.files[0]
        var formDataProduto = new FormData()

        const jsonData = JSON.stringify(data);
        const produto = new Blob([jsonData], {
            type: 'application/json'
        });

        formDataProduto.append('file', element.files[0], 'file')
        formDataProduto.append("produto", produto)

        axios.post("https://ecommerce-api-g5.herokuapp.com/produto/comfoto", formDataProduto, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => history.push('/Produto'));

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
        qtdEstoque: yup.number('Somente numero permetido')
            .min(1, 'Quantidade Minina de 1')
            .max(10000, 'Quantidade maxima excedida')
            .required('Insira a quantidae do produto em estoque'),
        valor: yup.number('Somente numero permetido')
            .min(1, 'Quantidade Minina de 1')
            .max(1000000000, 'Quantidade maxima excedida')
            .required('Insira o valor em reais do produto'),
        categoria: yup.string().required('Escolha uma categoria'),
        funcionario: yup.string().required('Escolha um funcionario'),
        dataFabricacao: yup.date().required('Selecione uma data'),
        foto: yup.string().required('Selecione uma foto')


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


            <Formik initialValues={{ nome: '', descricao: '', qtdEstoque: '', valor: '', categoria: '', funcionario: '', dataFabricacao: '', foto: '' }} onSubmit={handleSubmit} validationSchema={validations}  >
                <Form className="Form-Funcionario" id="formulario">

                    <div className="produtoCampo">
                        <p>Informações do Produto</p>

                        <div className="Form_Group-Funcionario">
                            <Field name="nome" className="Form_Field-Funcionario" placeholder="Nome" /> <br />
                            <ErrorMessage component="span" name="nome" className="Form_Error" />
                        </div>

                        <div className="Form_Group-Funcionario">
                            <Field name="descricao" className="Form_Field-Funcionario" placeholder="Descricao" /> <br />
                            <ErrorMessage component="span" name="descricao" className="Form_Error" />
                        </div>

                        <div className="Form_Group-Funcionario">
                            <Field name="qtdEstoque" type="number" className="Form_Field-Funcionario" placeholder="Quantidade Estoque" /> <br />
                            <ErrorMessage component="span" name="qtdEstoque" className="Form_Error" />
                        </div>

                        <div className="Form_Group-Funcionario">
                            <Field name="valor" type="number" className="Form_Field-Funcionario" placeholder="Valor" /> <br />
                            <ErrorMessage component="span" name="valor" className="Form_Error" />
                        </div>

                        <div className="Form_Group-Funcionario">
                            <Field name="categoria" as="select" className="Form_Field-Funcionario" placeholder="Categoria" > <br />
                                <option >Selecione uma categoria</option>

                                {listCategorias.map((categoria) => (<OpcaoCategoria categoria={categoria} />))}

                            </Field> <br />
                            <ErrorMessage component="span" name="categoria" className="Form_Error" />
                        </div>

                        <div className="Form_Group-Funcionario">

                            <Field name="funcionario" as="select" className="Form_Field-Funcionario" placeholder="Funcionario" > <br />
                                <option >Selecione um funcionario</option>

                                {listFuncionarios.map((funcionario) => (<OpcaoFuncionario funcionario={funcionario} />))}

                            </Field> <br />

                            <ErrorMessage component="span" name="funcionario" className="Form_Error" />
                        </div>

                        <div className="Form_Group-Funcionario">
                            <Field name="dataFabricacao" input type="date" className="Form_Field-Funcionario" placeholder="Data Fabricacao" /> <br />
                            <ErrorMessage component="span" name="dataFabricacao" className="Form_Error" />
                        </div>

                        <div className="Form_Group-Funcionario">
                            <Field name="foto" type="file" id="image" className="Form_Field-Funcionario" placeholder="Foto" />  <br />
                            <ErrorMessage component="span" name="foto" className="Form_Error" />
                        </div>


                        <button className="Form_Btn" type="submit">Cadastrar</button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}

export default InputCadastrarProduto