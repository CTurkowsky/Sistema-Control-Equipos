import {useState, useEffect} from 'react';
import {
  getEquiposInformaticosRequest,
  toggleEquipoRequest,
  toggleEquipoDisponibilidadRequest,
  deleteEquipoRequest,
} from '../api/equipoInformatico.api';

export const useEquipos = () => {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    const getEquipos = async () => {
      const response = await getEquiposInformaticosRequest();
      setEquipos(response.data);
    };
    getEquipos();
  }, [equipos]);
  const deleteEquipo = async (id) => {
    try {
      const response = await deleteEquipoRequest(id);
      setEquipos(equipos.filter((equipo) => equipo.idEquipo !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const toggleEstado = async (id) => {
    try {
      const equipoFound = equipos.find(
        (equipo) => equipo.idEquipo === id
      );
      await toggleEquipoRequest(
        id,
        equipoFound.estado === 'Necesita Reparacion' ? 'Operativo' : 'Necesita Reparacion'
      );
      setEquipos(
        equipos.map((equipo) =>
          equipo.idEquipo === id
            ? {...equipo, estado: !equipo.estado}
            : equipo
        )
      );
    } catch (error) {
      console.error(error);
    }
  };


  const toggleDisponibilidad = async (id) => {
    try {
      const equipoFound = equipos.find(
        (equipo) => equipo.idEquipo === id
      );
      await toggleEquipoDisponibilidadRequest(
        id,
        equipoFound.disponibilidad === 'No' ? 'Si' : 'No'
      );
      setEquipos(
        equipos.map((equipo) =>
          equipo.idEquipo === id
            ? {...equipo, disponibilidad: !equipo.disponibilidad}
            : equipo
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  return {
    equipos,
    toggleEstado,
    toggleDisponibilidad,
    deleteEquipo,
  };
};
