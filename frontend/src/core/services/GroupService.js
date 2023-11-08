import Axios from '../config/Axios';

class GroupService{
    url = 'grupos';

    async listarTodos() {
        return await Axios.get(this.url);
    }
}

export default new GroupService();