import api from './api';

export default class FuncionarioService {
    getFuncionario() {
        return api.get('/funcionario').then(res => res.data);
    }

    getFuncionarioById(id) {
        return api.get('/funcionario/' + id).then(res => res.data);
    }


}