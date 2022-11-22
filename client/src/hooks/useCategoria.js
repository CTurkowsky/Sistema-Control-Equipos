import { useState, useEffect } from 'react';
import { getCategoriasRequest, deleteCategoriaRequest } from '../api/categoria.api';

export const useCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const getCategorias = async () => {
      const response = await getCategoriasRequest();
      setCategorias(response.data);
    };
    getCategorias();
  }, [categorias]);
 const deleteCategoria = async (id) => {
    try {
      const response = await deleteCategoriaRequest(id);
      setCategorias(categorias.filter((categoria) => categoria.idCategoria !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return {
    categorias,deleteCategoria
  };
};
