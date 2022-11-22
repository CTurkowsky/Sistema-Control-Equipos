import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import equipoRoutes from './routes/equipoInformatico.routes.js';
import categoriaRoutes from './routes/categoria.routes.js'
import marcaRoutes from './routes/marca.routes.js'
import docenteRoutes from './routes/docente.routes.js'
import usuarioRoutes from './routes/usuario.routes.js'
import prestamoRoutes from './routes/prestamo.routes.js'
import equipoprestamoRoutes from './routes/equipoprestamo.routes.js'
import incidenciaRoutes from './routes/incidencia.routes.js'
const app = express();
app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(equipoRoutes);
app.use(incidenciaRoutes)
app.use(categoriaRoutes);
app.use(marcaRoutes);
app.use(docenteRoutes);
app.use(usuarioRoutes);
app.use(prestamoRoutes);
app.use(equipoprestamoRoutes);
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
