import axios from 'axios';
export const getMarcasRequest= async () =>
  await axios.get('https://sistema-control-equipos-production.up.railway.app/marca');
export const createMarcaRequest= async (marca) =>
  await axios.post('https://sistema-control-equipos-production.up.railway.app/marca', marca);
export const deleteMarcaRequest = async (id) =>
  await axios.delete(`https://sistema-control-equipos-production.up.railway.app/marca/${id}`);