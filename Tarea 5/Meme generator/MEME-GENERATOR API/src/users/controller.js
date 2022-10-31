const model = require('./model');

class UserController{

    getAll(req, res){
        res.send('Leggaste al endpoint de users')
    
    }

    getOne(req, res){
        res.send('Leggaste al get one endpoint' + req.params.id);
    
    }

};

module.exports = new UserController();