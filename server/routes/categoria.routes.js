import { Router } from 'express';
import { createCategoria, getCategorias, deleteCategoria } from '../controllers/categoria.controllers.js';
const router = Router();
router.post('/categoria', createCategoria);
router.get('/categoria', getCategorias);
router.delete('/categoria/:id', deleteCategoria);
export default router;