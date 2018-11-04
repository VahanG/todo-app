import ServerConnector from './ServerConnectorService';

class TodoService extends ServerConnector{
    constructor(){
        super('api/todo');
    }

    find(filter = {}) {
        const options = {
            method: 'GET',
        };
        return this.send({path:`/?${ServerConnector.makeQuery(filter)}`, options});
    }
    findOne(id) {
        const options = {
            method: 'GET',
        };
        return this.send({path:`/${id}`, options});
    }
    update(id, data) {
        const options = {
            method: 'PUT',
            body: JSON.stringify(data),
        };
        return this.send({path:`/${id}`, options});
    }
    create(data) {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
        };
        return this.send({path:`/`, options});
    }
    delete(id) {
        const options = {
            method: 'DELETE',
        };
        return this.send({path:`/${id}`, options});
    }
}

export default new TodoService();