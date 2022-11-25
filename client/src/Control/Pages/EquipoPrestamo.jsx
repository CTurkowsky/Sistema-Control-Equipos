import {
  Button,
  Grid,
  Alert,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { FormLayout } from '../Layout/FormLayout';
import { useEquipos, usePrestamos, useDocentes } from '../../hooks';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { createEquipoPrestamoRequest } from '../../api/equipoprestamo.api';
export const EquipoPrestamo = () => {
  const { equipos } = useEquipos();
  const { prestamos } = usePrestamos();
  const { docentes } = useDocentes();
  const [equipoFiltered, setEquipoFiltered] = useState([]);
  const [idPrestamo, setIdPrestamo] = useState('');
  const [docente, setDocente] = useState('');
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    setIdPrestamo(prestamos.length > 0 ? prestamos.at(-1).idPrestamo : '');
  }, [prestamos]);

  useEffect(() => {
    setDocente(docentes.length > 0 ? docentes.at(-1).nombre : '');
  }, [docentes]);

  const filtrarEquipo = (idEquipo) => {
    const filtered = equipos.find((e) => e.idEquipo == idEquipo);
    if (equipoFiltered.find((equipo) => equipo.idEquipo == idEquipo))
      return Swal.fire({
        title: 'Error!',
        text: 'Equipo ya agregado',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    setEquipoFiltered([...equipoFiltered, filtered]);
  };
  const addEquipo = (newEquipo) => {
    if (equipo.find((e) => e.equipo === newEquipo.equipo)) 
    return;
    setEquipo([newEquipo, ...equipo]);
    console.log(equipo);
  };

  const resetEquipo = () => {
    setEquipo([]);
    setEquipoFiltered([]);
  };

  const registerEquipo = async () => {
    try {
      if (equipo.length === 0) {
        return Swal.fire({
          title: 'Error!',
          text: 'Agrega un producto',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
      const registerequipo = await Promise.all(
        equipo.map(async (e) => {
          await createEquipoPrestamoRequest(e);
          resetEquipo();
          return Swal.fire({
            title: 'Success!',
            text: 'Se ha registrado un detalle',
            icon: 'success',
            confirmButtonText: 'Aceptar',
          });
        })
      );
    } catch (error) {
      return Swal.fire({
        title: 'Error!',
        text: { error },
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      equipo: '',
      prestamo: idPrestamo,
      estado: 'Pendiente',
    },
    enableReinitialize: true,
    validationSchema: YUP.object({
      equipo: YUP.string().required('El equipo es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        addEquipo(values);
        filtrarEquipo(values.equipo);
        formik.resetForm();
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: { error },
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    },
  });

  return (
    <>
      <FormLayout title='Prestamo para el docente:'>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <h2>{docente}</h2>
              <InputLabel>Equipo</InputLabel>
              <Select
                fullWidth
                label='Equipo'
                name='equipo'
                value={formik.values.equipo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {equipos.map((equipo) => {
                  if (equipo.disponibilidad === 'Si') {
                    return (
                      <MenuItem key={equipo.idEquipo} value={equipo.idEquipo}>
                        {equipo.nombre}
                      </MenuItem>
                    );
                  }
                })}
              </Select>
              {formik.touched.equipo && formik.errors.equipo ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.equipo}
                </Alert>
              ) : null}
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  fullWidth
                  type='submit'
                  sx={{ color: '#ffff' }}
                  onClick={addEquipo}
                >
                  Agregar
                </Button>
                {equipoFiltered.map((e) => (
                  <Grid
                    sx={{ mb: 2, mt: 1, p: 2, backgroundColor: '#eee' }}
                    key={e.idEquipo}
                  >
                    {e.nombre + ' ' + e.marca + ' ' + e.categoria}
                  </Grid>
                ))}
                <Button
                  variant='contained'
                  fullWidth
                  type='submit'
                  sx={{ color: '#ffff', mt: 2 }}
                  onClick={registerEquipo}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormLayout>
    </>
  );
};
