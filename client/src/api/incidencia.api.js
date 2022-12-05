import axios from 'axios';
export const getIncidenciasRequest= async () =>
  await axios.get('https://sistema-control-equipos-production.up.railway.app/incidencia');
export const createIncidenciaRequest = async (incidencia) =>
  await axios.post('https://sistema-control-equipos-production.up.railway.app/incidencia', incidencia);
export const toggleIncidenciaRequest = async (id, estado) =>
  await axios.put(`https://sistema-control-equipos-production.up.railway.app/incidencia/${id}`, {
    estado,
  });