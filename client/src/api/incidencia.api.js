import axios from 'axios';
export const getIncidenciasRequest= async () =>
  await axios.get('http://localhost:4000/incidencia');
export const createIncidenciaRequest = async (incidencia) =>
  await axios.post('http://localhost:4000/incidencia', incidencia);

