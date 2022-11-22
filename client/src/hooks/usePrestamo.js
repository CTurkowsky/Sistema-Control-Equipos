import { useState, useEffect } from 'react';
import {
  getPrestamosRequest,
  deletePrestamoRequest,
  togglePrestamoRequest,
} from '../api/prestamo.api';

export const usePrestamos = () => {
  const [prestamos, setPrestamos] = useState([]);
  useEffect(() => {
    const getPrestamos = async () => {
      const response = await getPrestamosRequest();
      setPrestamos(response.data);
    };
    getPrestamos();
  }, [prestamos]);
  const deletePrestamo = async (id) => {
    try {
      const response = await deletePrestamoRequest(id);
      setPrestamos(prestamos.filter((prestamo) => prestamo.idPrestamo !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const toggleCompleted = async (id) => {
    try {
      const prestamoFound = prestamos.find(
        (prestamo) => prestamo.idPrestamo === id
      );
      await togglePrestamoRequest(
        id,
        prestamoFound.estado === 'Pendiente' ?  'Completado' : 'Pendiente'
      );
      setPrestamos(
        prestamos.map((prestamo) =>
          prestamo.idPrestamo === id
            ? { ...prestamo, estado: !prestamo.estado }
            : prestamo
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  return {
    prestamos,
    deletePrestamo,
    toggleCompleted,
  };
};
