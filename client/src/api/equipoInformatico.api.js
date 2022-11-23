import axios from 'axios';
export const getEquiposInformaticosRequest = async () =>
  await axios.get('https://sistema-control-equipos-production.up.railway.app/equipoInformaticos');
export const createEquipoRequest = async (equipo) =>
  await axios.post('https://sistema-control-equipos-production.up.railway.app/equipoInformaticos', equipo);
export const deleteEquipoRequest = async (id) =>
  await axios.delete(`https://sistema-control-equipos-production.up.railway.app/equipoInformaticos/${id}`);
export const toggleEquipoRequest = async (id, estado) =>
  await axios.put(`https://sistema-control-equipos-production.up.railway.app/equipoInformaticos/${id}`, {
    estado,
  });
export const toggleEquipoDisponibilidadRequest = async (id, disponibilidad) =>
  await axios.put(`https://sistema-control-equipos-production.up.railway.app/equipoInformaticos/${id}`, {
    disponibilidad,
  });
