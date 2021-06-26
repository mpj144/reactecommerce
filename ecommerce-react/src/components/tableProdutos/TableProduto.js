import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProdutoService from '../../services/ProdutoService'
import { useHistory } from 'react-router-dom';

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import { BiTrash, BiPencil } from 'react-icons/bi'
import Modal from 'react-modal'
import { Button } from '@material-ui/core';

import './ModalProduto.scss'

const TableProdutos = (props) => {
    const history = useHistory();
    const [produtos, setProdutos] = useState([]);
    const produtoService = new ProdutoService();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [produtoEdit, setProdutoEdit] = useState(
        {
            id: '',
            nome: '',
            descricao: '',
            qtdEstoque: '',
            valor: '',
            idCategoria: '',
            nomeCategoria: '',
            idFuncionario: '',
            nomeFuncionario: '',
            dataFabricacao: '' + 'T00:00:00Z'
        }
    );

    useEffect(() => {
        produtoService.getProduto().then(data => setProdutos(data));
    }, []);

    function deleteItem(id) {
        produtoService.deleteProdutoId(id).then(resp => { document.location.reload(true) }).catch(erro => console.log(erro))
    }

    function AtualizarItem(rowData) {

        setProdutoEdit({ ...rowData })
        setModalIsOpen(true)

    }

    const actionTemplate = (rowData, column) => {
        return (
            <>
                <Button
                    type="button"
                    className="ui-button-update"

                    onClick={() => AtualizarItem(rowData)}
                ><BiPencil className="btn_icon" /></Button>

                <Button
                    type="button"
                    className="btn_delete"
                    onClick={() => deleteItem(rowData.id)}
                ><BiTrash className="btn_icon" /></Button>

            </>
        );
    }

    const handleSubmit = values => {

        const data = {
            nome: values.nome ? values.nome : produtoEdit.nome,
            descricao: values.descricao ? values.descricao : produtoEdit.descricao,
            qtdEstoque: parseInt(values.qtdEstoque) ? parseInt(values.qtdEstoque) : produtoEdit.qtdEstoque,
            valor: parseInt(values.valor) ? parseInt(values.valor) : produtoEdit.valor,
            idCategoria: parseInt(produtoEdit.idCategoria),
            nomeCategoria: produtoEdit.nomeCategoria,
            idFuncionario: parseInt(produtoEdit.idFuncionario),
            nomeFuncionario: produtoEdit.nomeFuncionario,
            dataFabricacao: values.dataFabricacao ? values.dataFabricacao + 'T00:00:00Z' : produtoEdit.dataFabricacao + 'T00:00:00Z'
            // fotoLink:values.foto   
        }

        console.log(data)

        produtoService.updateProduto(data, produtoEdit.id).then((resp) => document.location.reload(true)).catch(error => console.log('Deu erro', error))
    }

    const validations = yup.object().shape({
        nome: yup.string()
            .min(5, 'Nome deve conter 5 ou mais caracteres')
            .max(60, 'Nome deve conter 60 ou menos caracteres'),
        descricao: yup.string()
            .min(5, 'A descrição deve conter 10 ou mais caracteres')
            .max(60, 'Nome deve conter 100 ou menos caracteres'),
        qtdEstoque: yup.number('Somente numero permetido')
            .min(1, 'Quantidade Minina de 1')
            .max(10000, 'Quantidade maxima excedida'),
        valor: yup.number('Somente numero permetido')
            .min(1, 'Quantidade Minina de 1')
            .max(1000000000, 'Quantidade maxima excedida'),
        dataFabricacao: yup.date(),

    });

    return (

        <>

            <DataTable className="card" value={produtos}>
                <Column field="id" header="Id" className="card_column" ></Column>
                <Column field="nome" header="Nome" className="card_column" ></Column>
                <Column field="valor" header="Valor" className="card_column" ></Column>
                <Column body={actionTemplate} header="Valor" className="card_column" ></Column>
            </DataTable>

            <Modal isOpen={modalIsOpen} className="modal_produto" >

                <div className="div_infoAtual_produto">
                    <strong>Informacoes Atuais</strong>

                    <p><strong>Nome: </strong>{produtoEdit.nome}</p>
                    <p><strong>Descricao: </strong>{produtoEdit.descricao}</p>
                    <p><strong>Categoria: </strong>{produtoEdit.nomeCategoria}</p>
                    <p><strong>Qtd Estoque: </strong>{produtoEdit.qtdEstoque}</p>
                    <p><strong>Valor: </strong>{produtoEdit.valor}</p>
                    <p><strong>Funcionario de Cadastro: </strong>{produtoEdit.nomeFuncionario}</p>

                </div>

                <div className="div_form_produto">
                    <Formik initialValues={{ nome: '', descricao: '', qtdEstoque: '', valor: '' }} onSubmit={handleSubmit} validationSchema={validations}  >
                        <Form className="Form_Update_produto">

                            <div className=".div_form_produto">
                                <strong>Atualizar informações do Produto</strong>

                                <div className="div_FieldUpdate">
                                    <Field name="nome" className="Field_Update" placeholder="Nome" /> <br />
                                    <ErrorMessage component="span" name="nome" className="Form_Error" />
                                </div>

                                <div className="div_FieldUpdate">
                                    <Field name="descricao" className="Field_Update" placeholder="Descricao" /> <br />
                                    <ErrorMessage component="span" name="descricao" className="Form_ErrorUpdate" />
                                </div>

                                <div className="div_FieldUpdate">
                                    <Field name="qtdEstoque" className="Field_Update" placeholder="Quantidade Estoque" /> <br />
                                    <ErrorMessage component="span" name="qtdEstoque" className="Form_ErrorUpdate" />
                                </div>

                                <div className="div_FieldUpdate">
                                    <Field name="valor" className="Field_Update" placeholder="Valor" /> <br />
                                    <ErrorMessage component="span" name="valor" className="Form_ErrorUpdate" />
                                </div>

                                <div className="div_FieldUpdate">
                                    <Field name="dataFabricacao" input type="date" className="Field_Update" placeholder="Data Fabricacao" /> <br />
                                    <ErrorMessage component="span" name="dataFabricacao" className="Form_ErrorUpdate" />
                                </div>

                                <button className="btn_salvar" type="submit">Salvar</button>
                                <button onClick={() => setModalIsOpen(false)} className="btn_fechar">Fechar</button>
                            </div>
                        </Form>
                    </Formik>



                </div>

            </Modal>

        </>
    )
}

export default TableProdutos