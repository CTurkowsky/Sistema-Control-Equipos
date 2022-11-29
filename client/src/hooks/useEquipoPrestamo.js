import { useState, useEffect } from 'react';
import { getEquipoPrestamosRequest, deleteEquipoPrestamoRequest, toggleEquipoPrestamoDoneRequest } from '../api/equipoprestamo.api';

export const useEquipoPrestamos = () => {
  const [equipoprestamos, setEquipoPrestamos] = useState([]);
  useEffect(() => {
    const getEquipoPrestamos = async () => {
      const response = await getEquipoPrestamosRequest();
      setEquipoPrestamos(response.data);
    };
    getEquipoPrestamos();
  }, [equipoprestamos]);

  const deleteEquipoPrestamo = async (id) => {
    try {
      const response = await deleteEquipoPrestamoRequest(id);
      setEquipoPrestamos(equipoprestamos.filter((ep) => ep.idEquipoPrestamo !== id));
    } catch (error) {
      console.error(error);
    }
  };
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
    equipoprestamos,toggleCompleted, deleteEquipoPrestamo
  };
};
