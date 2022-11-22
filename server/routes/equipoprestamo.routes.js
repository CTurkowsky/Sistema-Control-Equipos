import { Router } from 'express';

import {
        getEquipoPrestamos,
        getEquipoPrestamo,
        createEquipoPrestamo,
        updateEquipoPrestamo,
        deleteEquipoPrestamo
} from '../controllers/equipoprestamo.controllers.js'

const router = Router();

router.get('/equipoprestamos', getEquipoPrestamos);

router.get('/equipoprestamos/:id', getEquipoPrestamo);

router.post('/equipoprestamos', createEquipoPrestamo);

router.put('/equipoprestamos/:id', updateEquipoPrestamo);

router.delete('/equipoprestamos/:id', deleteEquipoPrestamo);

export default router;