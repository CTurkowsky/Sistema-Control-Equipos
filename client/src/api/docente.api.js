import axios from 'axios';
export const getDocentesRequest= async () =>
  await axios.get('https://sistema-control-equipos-production.up.railway.app/docentes');
export const createDocenteRequest= async (docente) =>
  await axios.post('https://sistema-control-equipos-production.up.railway.app/docentes', docente);

