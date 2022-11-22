import { Router } from 'express';

import {
       
        deleteUsuario,
        updateUsuario,
        createUsuario,
        getUsuario,
        getUsuarios
} from '../controllers/usuario.controllers.js'

const router = Router();

router.get('/usuarios', getUsuarios);

router.get('/usuarios/:id', getUsuario);

router.post('/usuarios', createUsuario);

router.put('/usuarios/:id', updateUsuario);

router.delete('/usuarios/:id', deleteUsuario);

export default router;