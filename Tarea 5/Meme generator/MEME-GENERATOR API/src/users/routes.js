//TODO: CAMBIAR EL FLUJO DE TRAER USUARIOS A LOS MODULOS 

const router = require('express').Router();
const controller = require('./controller');

router.get('/',controller.getAll);
router.get('/:id',controller.getOne);


module.exports = router;