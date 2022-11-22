import { useState, useEffect } from 'react';
import { getMarcasRequest, deleteMarcaRequest } from '../api/marca.api';

export const useMarcas = () => {
  const [marcas, setMarcas] = useState([]);
  useEffect(() => {
    const getMarcas = async () => {
      const response = await getMarcasRequest();
      setMarcas(response.data);
    };
    getMarcas();
  }, [marcas]);

 const deleteMarca = async (id) => {
    try {
      const response = await deleteMarcaRequest(id);
      setMarcas(marcas.filter((marca) => marca.idMarca !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return {
    marcas,deleteMarca
  };
};
