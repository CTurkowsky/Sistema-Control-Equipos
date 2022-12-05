import { useState, useEffect } from 'react';
import { getDocentesRequest, deleteDocenteRequest } from '../api/docente.api';

export const useDocentes = () => {
  const [docentes, setDocentes] = useState([]);
  useEffect(() => {
    const getDocentes= async () => {
      const response = await getDocentesRequest();
      setDocentes(response.data);
    };
    getDocentes();
  }, []);

 const deleteDocente = async (id) => {
    try {
      const response = await deleteDocenteRequest(id);
      setDocentes(docentes.filter((docente) => docente.idDocente !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return {
    docentes, deleteDocente
  };
};

