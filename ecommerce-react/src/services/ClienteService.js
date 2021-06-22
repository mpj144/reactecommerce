import api from './api';

export default class ClienteService{
    getCliente(){
        return api.get('/cliente').then(res => res.data);
    }
}