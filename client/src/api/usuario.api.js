import axios from 'axios';
export const getUsuarioRequest= async () =>
  await axios.get('http://localhost:4000/usuarios');
export const createUsuarioRequest= async (usuario) =>
  await axios.post('http://localhost:4000/usuarios', usuario);


