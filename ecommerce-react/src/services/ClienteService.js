import api from './api';

export default class ClienteService{
    getCliente(){
        return api.get('/cliente').then(res => res.data);
    }

    getCienteId(id){
        return api.get('/cliente/'+id).then(res => res.data);
    }

    deleteClienteId(id){
        return api.delete('/cliente/'+id).then(res => res.data)
    }

    createCliente(newCliente){
        return api.post('/cliente', newCliente).then(res => res.data);
    }

    updateCliente(newCliente,id){
        return api.put('/cliente/'+id, newCliente).then(res => res.data);
    }
}

