import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import FuncionarioService from '../../../services/FuncionarioService'
import { useHistory } from 'react-router-dom';
import { BiTrash, BiPencil } from 'react-icons/bi'

import './TabelaFuncionarios.scss'
import './ModalAtualizar.scss'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import Modal from 'react-modal'
import { Button } from '@material-ui/core';

const TabelaFuncionarios = (props) => {
    const history = useHistory();
    const [funcionarios, setFuncionarios] = useState([]);
    const funcionarioService = new FuncionarioService();
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [funcionarioEdit, setFuncionarioEdit] = useState(
        {
            id: '',
            nome: '',
            cpf: ''
        }
    );

    useEffect(() => {
        funcionarioService.getFuncionario().then(data => setFuncionarios(data));
    }, []);

    function deleteItem(id) {

        funcionarioService.deleteFuncionarioById(id).then((resp) => document.location.reload(true)).catch(erro => console.log(erro))
    }

    function AtualizarItem(rowData) {

        setFuncionarioEdit({ ...rowData })
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
            nome: values.nomeFunc ? values.nomeFunc : funcionarioEdit.nome,
            cpf: values.cpf ? values.cpf : funcionarioEdit.cpf
        }

        console.log('valor da data: ', data)
        console.log('id: ', funcionarioEdit.id)
        // console.log(funcionarioEdit.id)
        funcionarioService.updateFuncionarioById(funcionarioEdit.id, data).then((resp) => { document.location.reload(true) }).catch(error => console.log('Deu errado', error))
    }

    const validations = yup.object().shape({
        nomeFunc: yup.string()
            .min(5, 'Nome muito pequeno!')
            .max(60, 'Nome muito grande!'),
        cpf: yup
            .string()
            .matches(/^['0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']+[''0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']$/, 'Só pode conter números!')
            .min(11, 'Número de CPF muito pequeno!')
            .max(11, 'Número de CPF muito grande!')

    });

    return (

        <>

            <DataTable className="card" value={funcionarios} paginator={true} rows={8}  >
                <Column field="id" header="ID" className="card_column" ></Column>
                <Column field="nome" header="Nome" className="card_column"></Column>
                <Column field="cpf" header="CPF" className="card_column"></Column>
                <Column body={actionTemplate} header="Acoes" className="card_column"> </Column>
            </DataTable>

            <br />
            <strong className="warning_message">IMPOSSIVEL APAGAR UM FUNCIONARIO QUE TENHA ALGUM PRODUTO CADASTRADO EM SEU NOME</strong><br />
            <strong className="warning_message">SE UM FUNCIONARIO NAO ESTIVER APAGANDO, VERIFIQUE SE NAO HA ALGUM PRODUTO CADASTRADO EM SEU NOME</strong>

            <Modal isOpen={modalIsOpen} className="update_modal" >

                <div className="div_infoAtual">
                    <strong>Informacoes Atuais</strong>

                    <p><strong>Nome: </strong>{funcionarioEdit.nome}</p>
                    <p><strong>CPF: </strong>{funcionarioEdit.cpf}</p>

                </div>

                <div className="div_form">
                    <strong>Insira as novas Informacoes</strong>
                    <Formik initialValues={{ nomeFunc: '', cpf: '' }} onSubmit={handleSubmit} validationSchema={validations}  >
                        <Form className="Form_Update">

                            <div className="div_FieldUpdate">
                                <Field name="nomeFunc" className="Field_Update" placeholder="Nome" /> <br />
                                <ErrorMessage component="span" name="nomeFunc" className="Form_ErrorUpdate" />
                            </div>

                            <div className="div_FieldUpdate">
                                <Field name="cpf" className="Field_Update" placeholder="CPF" /><br />
                                <ErrorMessage component="span" name="cpf" className="Form_ErrorUpdate" />
                            </div>

                            <button className="btn_salvar" type="submit">Salvar</button>
                            <button onClick={() => setModalIsOpen(false)} className="btn_fechar">Fechar</button>
                        </Form>
                    </Formik>
                </div>

            </Modal>

        </>

    )
}


export default TabelaFuncionarios