import { useState, useEffect } from 'react';
import { getIncidenciasRequest} from '../api/incidencia.api';

export const useIncidencia = () => {
  const [incidencias, setIncidencias] = useState([]);
  useEffect(() => {
    const getIncidencias= async () => {
      const response = await getIncidenciasRequest();
      setIncidencias(response.data);
    };
    getIncidencias();
  }, [incidencias]);
  return {
    incidencias,
  };
};

