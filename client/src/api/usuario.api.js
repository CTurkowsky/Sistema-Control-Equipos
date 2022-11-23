import axios from 'axios';
export const getUsuarioRequest= async () =>
  await axios.get('https://sistema-control-equipos-production.up.railway.app/usuarios');
export const createUsuarioRequest= async (usuario) =>
  await axios.post('https://sistema-control-equipos-production.up.railway.app/usuarios', usuario);


