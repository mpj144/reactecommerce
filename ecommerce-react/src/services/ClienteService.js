import api from './api';

export default class ClienteService{
    getCliente(){
        return api.get('/cliente').then(res => res.data);
    }

    getCienteId(){
        return api.get('/clinte/'+1).then(res => res.data);
    }
}

