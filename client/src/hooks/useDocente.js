import { useState, useEffect } from 'react';
import { getDocentesRequest } from '../api/docente.api';

export const useDocentes = () => {
  const [docentes, setDocentes] = useState([]);
  useEffect(() => {
    const getDocentes= async () => {
      const response = await getDocentesRequest();
      setDocentes(response.data);
    };
    getDocentes();
  }, [docentes]);

  return {
    docentes,
  };
};

