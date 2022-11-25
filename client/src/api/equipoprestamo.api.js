import axios from 'axios';
export const getEquipoPrestamosRequest= async () =>
  await axios.get('https://sistema-control-equipos-production.up.railway.app/equipoprestamos');
export const createEquipoPrestamoRequest = async (equipoprestamo) =>
  await axios.post('http://localhost:4000/equipoprestamos', equipoprestamo);
export const toggleEquipoPrestamoDoneRequest = async (id, estado) =>
  await axios.put(`https://sistema-control-equipos-production.up.railway.app/equipoprestamos/${id}`, {
    estado,
  });