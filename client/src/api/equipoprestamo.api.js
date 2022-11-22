import axios from 'axios';
export const getEquipoPrestamosRequest= async () =>
  await axios.get('http://localhost:4000/equipoprestamos');
export const createEquipoPrestamoRequest = async (equipoprestamo) =>
  await axios.post('http://localhost:4000/equipoprestamos', equipoprestamo);
export const toggleEquipoPrestamoDoneRequest = async (id, estado) =>
  await axios.put(`http://localhost:4000/equipoprestamos/${id}`, {
    estado,
  });