
const dbContext  = require('./dbContext');

class Service {
    constructor () { 
        this.service = "Service";
        this.method = "";
    }

    async getTasks () {   
        this.method = "getTasks";
        try {
            const result = await dbContext('task').select();
            let serviceResult  = { status:"success", message: "Tasks retrieved.",service: this.service, method: this.method, data: result };
            console.error(serviceResult);
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            return serviceResult;
        }
    }

    async getTask (id) {
        this.method = "getTask";
        try {
            const result = await dbContext('task').where('id', Number(id) );
            let serviceResult  = { status:"success", message: "Task retrieved.",service: this.service, method: this.method, data: result };
            console.error(serviceResult);
            
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            
            return serviceResult;
        }
    }

    async addTask (task) {
        this.method = "addTask";
        try {
            const result = await dbContext('task').insert(task);

            let serviceResult  = { status:"success", message: "Tasks added.",service: this.service, method: this.method, data: result };
            
            console.error(serviceResult);
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            
            return serviceResult;
        }  
    }

    async updateTask (task) {
        this.method = "updateTask";
        try {
            const result = await dbContext('task').where({id: Number(task.id)})
            .update(task);

            let serviceResult  = { status:"success", message: "Tasks updated.",service: this.service, method: this.method, data: result };
            
            console.error(serviceResult);
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            
            return serviceResult;
        }  
    }
    
    async deleteTask (task) {
        this.method = "deleteTask";
        try {
            const result = await dbContext('task').where({id: Number(task.id)})
            .del();

            let serviceResult  = { status:"success", message: "Tasks deleted.",service: this.service, method: this.method, data: result };
            
            console.error(serviceResult);
            return serviceResult;
        } catch (error) {
            let serviceResult  = { status: "failure", message: error, service: this.service, method: this.method, data: null};
            console.error(serviceResult);
            
            return serviceResult;
        }  
    }
}

module.exports = Service;
