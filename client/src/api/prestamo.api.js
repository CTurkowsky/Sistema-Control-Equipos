import axios from 'axios';
export const getPrestamosRequest = async () =>
  await axios.get('http://localhost:4000/prestamos');
export const createPrestamoRequest = async (prestamo) =>
  await axios.post('http://localhost:4000/prestamos', prestamo);
export const deletePrestamoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/prestamos/${id}`);
export const togglePrestamoRequest = async (id, estado) =>
  await axios.put(`http://localhost:4000/prestamos/${id}`, {
    estado,
  });
