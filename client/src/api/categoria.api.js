import axios from 'axios';
export const getCategoriasRequest = async () =>
  await axios.get('https://sistema-control-equipos-production.up.railway.app/categoria');
export const createCategoriaRequest= async (categoria) =>
  await axios.post('https://sistema-control-equipos-production.up.railway.app/categoria', categoria);
export const deleteCategoriaRequest = async (id) =>
  await axios.delete(`https://sistema-control-equipos-production.up.railway.app/categoria/${id}`);

