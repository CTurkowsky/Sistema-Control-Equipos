import { Router } from 'express';

import {
        getDocentes,
        getDocente,
        createDocente,
        updateDocente,
        deleteDocente
} from '../controllers/docente.controllers.js'

const router = Router();

router.get('/docentes', getDocentes);

router.get('/docentes/:id', getDocente);

router.post('/docentes', createDocente);

router.put('/docentes/:id', updateDocente);

router.delete('/docentes/:id', deleteDocente);

export default router;