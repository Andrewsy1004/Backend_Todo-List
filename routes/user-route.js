import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import {NotaPost,ValidarName,DeleteNota,UpdateNota} from '../controllers/usu-controller.js';
import {estadoExiste} from '../middlewares/estado-existe.js';

const router = Router();

router.get('/get/:nombre',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], ValidarName)

router.post('/post', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nota', 'La nota es obligatoria').not().isEmpty(),
    estadoExiste('Terminado', 'Sin terminar'),
    validarCampos
], NotaPost)

router.put('/put', UpdateNota)

router.delete('/delete/:nota',[
    check('nota', 'La nota es obligatoria').not().isEmpty(),
    validarCampos
] ,DeleteNota )

export default router;
