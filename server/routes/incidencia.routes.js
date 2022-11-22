import { Router } from 'express';

import {
        getIncidencias,
        getIncidencia,
        createIncidencia,
        updateIncidencia,
        deleteIncidencia,
} from '../controllers/incidencia.controllers.js'

const router = Router();

router.get('/incidencia', getIncidencias);

router.get('/incidencia/:id', getIncidencia);

router.post('/incidencia', createIncidencia);

router.put('/incidencia/:id', updateIncidencia);

router.delete('/incidencia/:id', deleteIncidencia);

export default router;