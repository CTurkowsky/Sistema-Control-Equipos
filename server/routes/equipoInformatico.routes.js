import { Router } from 'express';

import {
        getEquipoInformaticos,
        getEquipoInformatico,
        createEquipoInformatico,
        updateEquipoInformatico,
        deleteEquipoInformatico
} from '../controllers/equipoInformatico.controllers.js'

const router = Router();

router.get('/equipoInformaticos', getEquipoInformaticos);

router.get('/equipoInformaticos/:id', getEquipoInformatico);

router.post('/equipoInformaticos', createEquipoInformatico);

router.put('/equipoInformaticos/:id', updateEquipoInformatico);

router.delete('/equipoInformaticos/:id', deleteEquipoInformatico);

export default router;