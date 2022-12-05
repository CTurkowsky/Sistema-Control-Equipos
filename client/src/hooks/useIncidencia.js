import { useState, useEffect } from 'react';
import {
  getIncidenciasRequest,
  toggleIncidenciaRequest,
} from '../api/incidencia.api';

export const useIncidencia = () => {
  const [incidencias, setIncidencias] = useState([]);
  useEffect(() => {
    const getIncidencias = async () => {
      const response = await getIncidenciasRequest();
      setIncidencias(response.data);
    };
    getIncidencias();
  }, [incidencias]);

  const toggleEstado = async (id) => {
    try {
      const incidenciaFound = incidencias.find(
        (incidencia) => incidencia.idIncidencia === id
      );
      await toggleIncidenciaRequest(
        id,
        incidenciaFound.estado === 'Pendiente' ? 'Reparado' : 'Pendiente'
      );
      setIncidencias(
        incidencias.map((incidencia) =>
          incidencia.idIncidencia === id
            ? { ...incidencia, estado: !incidencia.estado }
            : incidencia
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  return {
    incidencias,
    toggleEstado,
  };
};
