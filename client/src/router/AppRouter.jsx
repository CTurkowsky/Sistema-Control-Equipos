import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import {
  CategoriaPage,
  DocentePage,
  EquipoInformaticoPage,
  PrestamoPage,
  EquipoPrestamo,
  ListEquipos,
  ListPrestamos,
  ListCategorias,
  ListMarcas,
  MarcaPage,
  IncidenciaPage,
  ListEquipoPrestamo,
  ListIncidencia,
  ListDocentes
} from '../Control/Pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/*' element={<EquipoInformaticoPage />} />
      <Route path='/list' element={<ListEquipos />} />
      <Route path='/listprestamo' element={<ListPrestamos/>} />
      <Route path='/listcategoria' element={<ListCategorias/>} />
      <Route path='/listmarca' element={<ListMarcas/>} />
      <Route path='/listincidencia' element={<ListIncidencia/>} />
      <Route path='/listdocente' element={<ListDocentes/>} />
      <Route path='/marca' element={<MarcaPage />} />
      <Route path='/categoria' element={<CategoriaPage />} />
      <Route path='/docente' element={<DocentePage />} />
      <Route path='/prestamo' element={<PrestamoPage />} />
      <Route path='/equipoprestamo' element={<EquipoPrestamo/>} />
      <Route path='/listequipoprestamo' element={<ListEquipoPrestamo/>} />
      <Route path='/incidencia' element={<IncidenciaPage/>} />
    </Routes>
  );
};
