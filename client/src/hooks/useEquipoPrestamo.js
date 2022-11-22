import { useState, useEffect } from 'react';
import { getEquipoPrestamosRequest, toggleEquipoPrestamoDoneRequest } from '../api/equipoprestamo.api';

export const useEquipoPrestamos = () => {
  const [equipoprestamos, setEquipoPrestamos] = useState([]);
  useEffect(() => {
    const getEquipoPrestamos = async () => {
      const response = await getEquipoPrestamosRequest();
      setEquipoPrestamos(response.data);
    };
    getEquipoPrestamos();
  }, [equipoprestamos]);

    const toggleCompleted = async (id) => {
    try {
      const equipoprestamoFound = equipoprestamos.find((equipoprestamo) => equipoprestamo.idEquipoPrestamo === id);
      await toggleEquipoPrestamoDoneRequest(id, equipoprestamoFound.estado === "Pendiente" ? "Completado": "Pendiente");
      setEquipoPrestamos(
        equipoprestamos.map((ep) =>
          ep.idPrestamo === id ? { ...ep, estado: !ep.estado} :ep
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  return {
    equipoprestamos,toggleCompleted
  };
};
