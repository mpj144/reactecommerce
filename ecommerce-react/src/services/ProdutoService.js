import api from './api';

export default class ProdutoService{
    getProduto(){
        return api.get('/produto').then(res => res.data);
    }

    getProdutoId(){
        return api.get('/produto/'+1).then(res => res.data);
    }

    deleteProdutoId(id){
        return api.delete('/produto/'+id).then(res => res.data)
    }

    createProduto(newProduto){
        return api.post('/produto', newProduto).then(res => res.data);
    }

    updateProduto(newProduto,id){
        return api.put('/produto/'+id, newProduto).then(res => res.data);
    }
}