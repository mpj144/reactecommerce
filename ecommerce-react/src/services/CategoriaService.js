import api from './api';

export default class CategoriaService{
    getCategoria(){
        return api.get('/categoria').then(res => res.data);
    }

    getCategoriaById(){
        return api.get('/categoria/'+1).then(res => res.data);
    }

    createcategoria(newCategoria) {
        return api.post('/categpria', newCategoria).then(res => res.data);
    }

    updateCategoria(newCategoria,id){
        return api.put('/categoria/'+id, newCategoria).then(res => res.data);
    }

    deleteCategoriaId(id){
        return api.delete('/categoria/'+id).then(res => res.data)
    }

}