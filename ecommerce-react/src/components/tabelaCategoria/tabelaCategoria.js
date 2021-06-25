import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CategoriaService from '../../services/CategoriaService'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import Modal from 'react-modal'
import { Button } from '@material-ui/core';

import { BiTrash, BiPencil } from 'react-icons/bi'

const TableCategorias = (props) => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaEdit, setCategoriaEdit] = useState({
        id: '',
        nome: '',
        descricao: ''
    });
    const [modalIsOpen, setModalIsOpen] = useState();
    const categoriaService = new CategoriaService();

    useEffect(() => {
        categoriaService.getCategoria().then(data => setCategorias(data));
    }, []);


    function deleteItem(id) {

        categoriaService.deleteCategoriaId(id).then(resp => { document.location.reload(true) }).catch(erro => console.log(erro))
    }

    function AtualizarItem(rowData) {

        setCategoriaEdit({ ...rowData })
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
            nome: values.nomecategoria ? values.nomecategoria : categoriaEdit.nome,
            descricao: values.descricao ? values.descricao : categoriaEdit.descricao
        }

        console.log('valor da data: ', data)
        console.log('id: ', categoriaEdit.id)

        categoriaService.updateCategoria(categoriaEdit.id, data).then((resp) => { document.location.reload(true) }).catch(error => console.log('Deu errado', error))
    }

    const validations = yup.object().shape({
        nomecategoria: yup.string()
            .min(5, 'Nome muito pequeno!')
            .max(60, 'Nome muito grande!'),
        descricao: yup
            .string()
    });


    return (

        <>

            <DataTable className="card" value={categorias}>
                <Column field="id" header="Código" className="card_column_cliente"></Column>
                <Column field="nome" header="Nome" className="card_column_cliente"></Column>
                <Column field="descricao" header="Descrição" className="card_column_cliente"></Column>
                <Column body={actionTemplate} header="Acoes" className="card_column_cliente"> </Column>
            </DataTable>

            <Modal isOpen={modalIsOpen} className="update_modal" >

                <div className="div_infoAtual">
                    <strong>Informacoes Atuais</strong>

                    <p><strong>Nome: </strong>{categoriaEdit.nome}</p>
                    <p><strong>Descricao: </strong>{categoriaEdit.descricao}</p>

                </div>

                <div className="div_form">
                    <strong>Insira as novas Informacoes</strong>
                    <Formik initialValues={{ nomecategoria: '', descricao: '' }} onSubmit={handleSubmit} validationSchema={validations}  >
                        <Form className="Form_Update">

                            <div className="div_FieldUpdate">
                                <Field name="nomecategoria" className="Field_Update" placeholder="Nome" /><br />
                                <ErrorMessage component="span" name="nomecategoria" className="Form_ErrorUpdate" />
                            </div>

                            <div className="div_FieldUpdate">
                                <Field name="descricao" className="Field_Update" placeholder="Descrição" /><br />
                                <ErrorMessage component="span" name="descricao" className="Form_ErrorUpdate" />
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

export default TableCategorias