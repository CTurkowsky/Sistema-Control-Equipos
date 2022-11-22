import axios from 'axios';
export const getDocentesRequest= async () =>
  await axios.get('http://localhost:4000/docentes');
export const createDocenteRequest= async (docente) =>
  await axios.post('http://localhost:4000/docentes', docente);

