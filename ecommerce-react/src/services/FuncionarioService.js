import api from './api';

export default class FuncionarioService {
    getFuncionario() {
        return api.get('/funcionario').then(res => res.data);
    }

    getFuncionarioById(id) {
        return api.get('/funcionario/' + id).then(res => res.data);
    }

    createFuncionario(newFuncionario) {
        return api.post('/funcionario', newFuncionario).then(res => res.data);
    }

    updateFuncionarioById(id, funcionario) {
        return api.put('/funcionario/' + id, funcionario).then(res => res.data);
    }

    deleteFuncionarioById(id) {
        return api.delete('/funcionario/' + id).then(res => res.data);
    }

}