import Axios from '../config/Axios';

class PersonService{
    url = 'persons';

    async listarTodos() {
        return await Axios.get(this.url);
    }
}

export default new PersonService();