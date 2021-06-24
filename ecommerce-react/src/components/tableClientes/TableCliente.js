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
    const [clientes,setClientes] = useState([]);
    const clienteService = new ClienteService();
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const[clienteEdit, setClienteEdit] = useState(
        {   id:'',
            nome: '',  
            usuario: '', 
            email: '', 
            cpf: '',
            niver:'',
            endereco:{
            rua:'',
            numero:'',
            complemento:'',
            bairro:'',
            cidade:'',
            estado:'',
            cep:'',
            },
            
        }
    );
    useEffect(()=>{
        clienteService.getCliente().then(data => setClientes(data));
    },[]);

    function deleteItem(id){
        clienteService.deleteClienteId(id).then(resp => {document.location.reload(true)}).catch(erro => console.log(erro))
    }

    function AtualizarItem(rowData){
        setClienteEdit({...rowData})
        setModalIsOpen(true)
    }

    const actionTemplate = (rowData,column) =>{
        return (
            
            <>
                <Button
                    type="button"
                    className="ui-button-update"

                    onClick={() => AtualizarItem(rowData)}
                ><BiPencil className="btn_icon"/></Button>

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
            endereco:{
                rua: values.rua ? values.rua : clienteEdit.rua,
                numero: values.numero ? values.numero :clienteEdit.numero,
                complemento: values.complemento ? values.complemento :clienteEdit.complemento,
                bairro: values.bairro ? values.bairro :clienteEdit.bairro,
                cidade: values.cidade  ? values.cidade :clienteEdit.cidade,
                estado: values.estado ? values.estado :clienteEdit.estado,
                cep: values.cep ? values.cep :clienteEdit.cep
            },
            nome: values.nome ?values.nome :clienteEdit.nome,
            usuario: values.usuario ?values.usuario :clienteEdit.usuario,
            email: values.email ?values.email :clienteEdit.email,
            cpf: values.cpf ?values.cpf :clienteEdit.cpf,
            dataNascimento:values.niver ? values.niver:clienteEdit.niver
        }

        clienteService.updateCliente(clienteEdit.id,data).then((res)=>{ document.location.reload(true) }).catch(error => console.log('Deu errado', error))
    }

    const validations = yup.object().shape({
        nome: yup.string()
                        .min(5,'Nome deve conter 5 ou mais caracteres')
                        .max(60,'Nome deve conter 60 ou menos caracteres'),
        usuario: yup.string().required('Escolha um nome de usuário'),
        email:   yup.string()
                    .min(4,'E-mail deve conter 4 ou mais caracteres')
                    .max(30,'E-mail deve conter 30 ou menos caracteres'),
        cpf: yup
            .string()
            .matches(/^['0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']+[''0'-'1'-'2'-'3'-'4'-'5'-'6'-'7'-'8'-'9']$/, 'Só pode conter números!')
            .min(11, 'Número de CPF muito pequeno!')
            .max(11, 'Número de CPF muito grande!'), 
            rua: yup
                .string()
                .min(4,'pequeno')
                .max(60,'grande'),
            numero: yup
                    .string()
                    .min(1,'pequeno')
                    .max(20,'grande'),
            complemento: yup
                        .string()
                        .max(30,'grande'),
            bairro: yup
                    .string()
                    .max(40,'grande'),
            cidade: yup
                    .string()
                    .min(3,'pequeno')
                    .max(40,'grande'),
            estado: yup
                    .string()
                    .min(0,'pequeno')
                    .max(2,'grande'),
            cep: yup
                .string(),      
        niver: yup
                .string()
    });


    return(
        <div>
            
                <DataTable className="card" value={clientes} paginator={true} rows={8}> 
                    <Column field="id" header="Id"></Column>
                    <Column field="nome" header="Nome"></Column>
                    <Column field="usuario" header="User"></Column>
                    <Column field="email" header="Email"></Column>
                    <Column field="cpf" header="CPF"></Column>
                    <Column field="dataNascimento" header="Aniversário"></Column>
                    <Column field="endereco.cep" header="CEP"></Column>
                    <Column field="endereco.estado" header="Estado"></Column>
                    <Column field="endereco.cidade" header="Cidade"></Column>
                    <Column field="endereco.rua" header="Rua"></Column>
                    <Column field="endereco.numero" header="Número"></Column>
                    <Column field="endereco.complemento" header="Complemento"></Column>
                    <Column body={actionTemplate} header="Acoes" className="card_column"></Column>
                </DataTable>

                <Modal isOpen={modalIsOpen} className="modal_cliente">
                    <div className="div_infoAtual">
                        <strong>Informacoes Atuais</strong>

                        <p><strong>ID: </strong>{clienteEdit.id}</p>
                        <p><strong>Nome: </strong>{clienteEdit.nome}</p>
                        <p><strong>Usuario: </strong>{clienteEdit.usuario}</p>
                        <p><strong>E-mail: </strong>{clienteEdit.email}</p>
                        <p><strong>CPF: </strong>{clienteEdit.cpf}</p>
                        <p><strong>Rua: </strong>{clienteEdit.endereco.rua}</p> 
                        <p><strong>Numero:</strong>{clienteEdit.endereco.numero}</p> 
                        <p><strong>Complemento:</strong>{clienteEdit.endereco.complemento}</p> 
                        <p><strong>Bairro:</strong>{clienteEdit.endereco.bairro}</p>
                        <p><strong>Cidade:</strong>{clienteEdit.endereco.cidade}</p> 
                        <p><strong>Estado:</strong>{clienteEdit.endereco.estado}</p>
                        <p><strong>Cep:</strong>{clienteEdit.endereco.cep}</p>
                    </div>                       

                       
                    
                        
                        <Formik initialValues={{ nome: '', usuario: '', email: '', cpf: '' ,rua:'',numero:'',complemento:'',bairro:'',cidade:'',estado:'',cep:'',niver:''}} onSubmit={handleSubmit} validationSchema={validations}  >
                            <Form className="Form_Update_cliente">
                            
                            <div className="enderecoCampo_modal">
                            <strong>Insira as novas Informações do endereço</strong>
                            
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


                        <div className="clienteCampo_modal">
                       
                        <strong>Insira as novas Informações do cliente</strong>
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


                            <div className="campoButao">
                                <button className="btn_salvar" type="submit">Salvar</button>
                                <button onClick={() => setModalIsOpen(false)} className="btn_fechar">Fechar</button>
                            </div>
                            </div>  
                            </Form>
                        </Formik>
                    
                </Modal>
           
        </div>
    )
}

export default TableClientes