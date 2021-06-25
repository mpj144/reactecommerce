import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useHistory } from 'react-router-dom';
import { BiTrash, BiPencil } from 'react-icons/bi'
import ClienteService from '../../services/ClienteService'

import '../../pages/Funcionario/ListarFuncionario/TabelaFuncionarios.scss'
import './ModalCliente.scss'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import Modal from 'react-modal'
import { Button } from '@material-ui/core';

const TableClientes = (props) => {
    const history = useHistory();
    const [clientes, setClientes] = useState([]);
    const clienteService = new ClienteService();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [clienteEdit, setClienteEdit] = useState(
        {
            id: '',
            nome: '',
            usuario: '',
            email: '',
            cpf: '',
            dataNascimento: '',
            endereco: {
                rua: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: '',
                cep: '',
            },

        }
    );
    useEffect(() => {
        clienteService.getCliente().then(data => setClientes(data));
    }, []);

    function deleteItem(id) {
        clienteService.deleteClienteId(id).then(resp => { document.location.reload(true) }).catch(erro => console.log(erro))
    }

    function AtualizarItem(rowData) {
        setClienteEdit({ ...rowData })
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
            endereco: {
                rua: values.rua ? values.rua : clienteEdit.endereco.rua,
                numero: values.numero ? values.numero : clienteEdit.endereco.numero,
                complemento: values.complemento ? values.complemento : clienteEdit.endereco.complemento,
                bairro: values.bairro ? values.bairro : clienteEdit.endereco.bairro,
                cidade: values.cidade ? values.cidade : clienteEdit.endereco.cidade,
                estado: values.estado ? values.estado : clienteEdit.endereco.estado,
                cep: values.cep ? values.cep : clienteEdit.endereco.cep
            },
            nome: values.nome ? values.nome : clienteEdit.nome,
            usuario: values.usuario ? values.usuario : clienteEdit.usuario,
            email: values.email ? values.email : clienteEdit.email,
            cpf: values.cpf ? values.cpf : clienteEdit.cpf,
            dataNascimento: values.niver ? values.niver + 'T00:00:00Z' : clienteEdit.dataNascimento + 'T00:00:00Z'

        }

        console.log(clienteEdit.id)

        clienteService.updateCliente(data, clienteEdit.id).then((res) => { document.location.reload(true) }).catch(error => console.log('Deu errado', error))
    }

    const validations = yup.object().shape({
        nome: yup.string()
            .min(5, 'Nome deve conter 5 ou mais caracteres')
            .max(60, 'Nome deve conter 60 ou menos caracteres'),
        usuario: yup.string().min(6, 'Usuario deve conter 6 ou mais caracteres'),
        email: yup.string()
            .min(4, 'E-mail deve conter 4 ou mais caracteres')
            .max(30, 'E-mail deve conter 30 ou menos caracteres'),
        cpf: yup
            .string()
            .matches(/^['0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']+[''0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']$/, 'Só pode conter números!')
            .min(11, 'Número de CPF muito pequeno!')
            .max(11, 'Número de CPF muito grande!'),
        rua: yup
            .string()
            .min(4, 'pequeno')
            .max(60, 'grande'),
        numero: yup
            .string()
            .min(1, 'pequeno')
            .max(20, 'grande'),
        complemento: yup
            .string()
            .max(30, 'grande'),
        bairro: yup
            .string()
            .max(40, 'grande'),
        cidade: yup
            .string()
            .min(3, 'pequeno')
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

            <DataTable className="card" value={clientes} paginator={true} rows={8}>
                <Column field="id" header="Id" className="card_column_cliente" ></Column>
                <Column field="nome" header="Nome" className="card_column_cliente" ></Column>
                <Column field="usuario" header="User" className="card_column_cliente"></Column>
                <Column field="email" header="Email" className="card_column_cliente"></Column>
                <Column field="cpf" header="CPF" className="card_column_cliente" ></Column>
                {/* <Column field="dataNascimento" header="Aniversário"></Column>
                <Column field="endereco.cep" header="CEP"></Column>
                <Column field="endereco.estado" header="Estado"></Column>
                <Column field="endereco.cidade" header="Cidade"></Column>
                <Column field="endereco.rua" header="Rua"></Column>
                <Column field="endereco.numero" header="Número"></Column>
                <Column field="endereco.complemento" header="Complemento"></Column> */}
                <Column body={actionTemplate} header="Acoes" className="card_column_cliente" ></Column>
            </DataTable>

            <Modal isOpen={modalIsOpen} className="modal_cliente">
                <div className="div_infoAtual">
                    <strong>Informacoes Atuais</strong>

                    <p><strong>ID: </strong>{clienteEdit.id}</p>
                    <p><strong>Nome: </strong>{clienteEdit.nome}</p>
                    <p><strong>Usuario: </strong>{clienteEdit.usuario}</p>
                    <p><strong>E-mail: </strong>{clienteEdit.email}</p>
                    <p><strong>CPF: </strong>{clienteEdit.cpf}</p>
                    <p><strong>Data Nascimento: </strong>{clienteEdit.dataNascimento}</p>
                    <p><strong>Rua: </strong>{clienteEdit.endereco.rua}</p>
                    <p><strong>Numero:</strong>{clienteEdit.endereco.numero}</p>
                    <p><strong>Complemento:</strong>{clienteEdit.endereco.complemento}</p>
                    <p><strong>Bairro:</strong>{clienteEdit.endereco.bairro}</p>
                    <p><strong>Cidade:</strong>{clienteEdit.endereco.cidade}</p>
                    <p><strong>Estado:</strong>{clienteEdit.endereco.estado}</p>
                    <p><strong>Cep:</strong>{clienteEdit.endereco.cep}</p>
                </div>



                <div className="div_form">
                    <Formik initialValues={{ nome: '', usuario: '', email: '', cpf: '', rua: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '', cep: '', niver: '' }} onSubmit={handleSubmit} validationSchema={validations}  >
                        <Form className="Form_Update_cliente">

                            <div className="enderecoCampo_modal">
                                <strong>Insira as novas Informações do endereço</strong>

                                <div className="div_FieldUpdate">
                                    <Field name="rua" className="Field_Update" placeholder="Rua" /> <br />
                                    <ErrorMessage component="span" name="rua" className="Form_ErrorUpdate" />
                                </div>
                                <div className="div_FieldUpdate">
                                    <Field name="numero" className="Field_Update" placeholder="Numero" /><br />
                                    <ErrorMessage component="span" name="numero" className="Form_Error" />
                                </div>
                                <div className="div_FieldUpdate">
                                    <Field name="complemento" className="Field_Update" placeholder="Complemento" /><br />
                                    <ErrorMessage component="span" name="complemento" className="Form_Error" />
                                </div>
                                <div className="div_FieldUpdate">
                                    <Field name="bairro" className="Field_Update" placeholder="Bairro" /><br />
                                    <ErrorMessage component="span" name="bairro" className="Form_Error" />
                                </div>
                                <div className="div_FieldUpdate">
                                    <Field name="cidade" className="Field_Update" placeholder="Cidade" /><br />
                                    <ErrorMessage component="span" name="cidade" className="Form_Error" />
                                </div>
                                <div className="div_FieldUpdate">
                                    <Field name="estado" className="Field_Update" placeholder="Estado" /><br />
                                    <ErrorMessage component="span" name="estado" className="Form_Error" />
                                </div>
                                <div className="div_FieldUpdate">
                                    <Field name="cep" className="Field_Update" placeholder="CEP" /><br />
                                    <ErrorMessage component="span" name="cep" className="Form_Error" />
                                </div>
                            </div>


                            <div className="clienteCampo_modal">

                                <strong>Insira as novas Informações do cliente</strong>
                                <div className="div_FieldUpdate">
                                    <Field name="nome" className="Field_Update" placeholder="Nome" /><br />
                                    <ErrorMessage component="span" name="nome" className="Form_Error" />
                                </div>

                                <div className="div_FieldUpdate">
                                    <Field name="usuario" className="Field_Update" placeholder="Usuario" /><br />
                                    <ErrorMessage component="span" name="usuario" className="Form_Error" />
                                </div>

                                <div className="div_FieldUpdate">
                                    <Field name="email" className="Field_Update" placeholder="E-mail" /><br />
                                    <ErrorMessage component="span" name="email" className="Form_Error" />
                                </div>

                                <div className="div_FieldUpdate">
                                    <Field name="cpf" className="Field_Update" placeholder="CPF" /><br />
                                    <ErrorMessage component="span" name="cpf" className="Form_Error" />
                                </div>
                                <div className="div_FieldUpdate">
                                    <Field name="niver" input type="date" className="Field_Update" placeholder="Aniversário" /><br />
                                    <ErrorMessage component="span" name="niver" className="Form_Error" />
                                </div>


                                <div className="campoButao">
                                    <button className="btn_salvar" type="submit">Salvar</button>
                                    <button onClick={() => setModalIsOpen(false)} className="btn_fechar">Fechar</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>

            </Modal>

        </>
    )
}

export default TableClientes