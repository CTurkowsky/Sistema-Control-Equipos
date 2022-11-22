import axios from 'axios';
export const getEquiposInformaticosRequest = async () =>
  await axios.get('http://localhost:4000/equipoInformaticos');
export const createEquipoRequest = async (equipo) =>
  await axios.post('http://localhost:4000/equipoInformaticos', equipo);
export const deleteEquipoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/equipoInformaticos/${id}`);
export const toggleEquipoRequest = async (id, estado) =>
  await axios.put(`http://localhost:4000/equipoInformaticos/${id}`, {
    estado,
  });