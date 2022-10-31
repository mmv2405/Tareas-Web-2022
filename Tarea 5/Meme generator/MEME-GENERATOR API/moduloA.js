const common = require('./common');


const dato = common.setMessage();


module.exports = function(){
    const dato = common.getMessage();
    console.log('El mensaje guardado es: ', dato);
}