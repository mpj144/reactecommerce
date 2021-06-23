import api from './api';

export default class CategoriaService{
    getCategoria(){
        return api.get('/categoria').then(res => res.data);
    }

    getCategoriaById(){
        return api.get('/categoria/'+1).then(res => res.data);
    }
}