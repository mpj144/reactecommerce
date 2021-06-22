import api from './api';

export default class ProdutoService{
    getProduto(){
        return api.get('/produto').then(res => res.data);
    }

    getProdutoId(){
        return api.get('/produto/'+1).then(res => res.data);
    }
}

