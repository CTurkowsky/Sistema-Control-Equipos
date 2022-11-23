import axios from 'axios';
export const getPrestamosRequest = async () =>
  await axios.get('https://sistema-control-equipos-production.up.railway.app/prestamos');
export const createPrestamoRequest = async (prestamo) =>
  await axios.post('https://sistema-control-equipos-production.up.railway.app/prestamos', prestamo);
export const deletePrestamoRequest = async (id) =>
  await axios.delete(`https://sistema-control-equipos-production.up.railway.app/prestamos/${id}`);
export const togglePrestamoRequest = async (id, estado) =>
  await axios.put(`https://sistema-control-equipos-production.up.railway.app/prestamos/${id}`, {
    estado,
  });
