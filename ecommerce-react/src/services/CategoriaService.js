import api from './api';

export default class CategoriaService{
    getCategoria(){
        return api.get('/categoria').then(res => res.data);
    }

    getCategoriaById(id){
        return api.get('/categoria/'+id).then(res => res.data);
    }

    createCategoria(newCategoria) {
        return api.post('/categoria', newCategoria).then(res => res.data);
    }

    updateCategoria(newCategoria,id){
        return api.put('/categoria/'+id, newCategoria).then(res => res.data);
    }

    deleteCategoriaId(id){
        return api.delete('/categoria/'+id).then(res => res.data)
    }

}