import {
  Button,
  Grid,
  TextField,
  Alert,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { FormLayout } from '../../Control/Layout/FormLayout';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { createIncidenciaRequest } from '../../api/incidencia.api';
import { useEquipos, useUsuarios } from '../../hooks';
import Swal from 'sweetalert2';
export const IncidenciaPage = () => {
  const { equipos } = useEquipos();
  const { usuarios } = useUsuarios();
  const formik = useFormik({
    initialValues: {
      fecha: '',
      hora: '',
      descripcion: '',
      equipo: '',
      usuario: '',
      estado: 'Pendiente'
    },
    validationSchema: YUP.object({
      fecha: YUP.date().required('La fecha es requerida'),
      hora: YUP.string().required('La hora es requerida'),
      descripcion: YUP.string().required('La descripcion es requerida'),
      equipo: YUP.string().required('El equipo es requerido'),
      usuario: YUP.string().required('El usuario es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        // if (
        //   incidencias.find(
        //     (incidencia) => incidencia.equipo === values.equipo
        //   )
        // )
        //   return Swal.fire({
        //     title: 'Error!',
        //     text: 'El equipo ya ha registrado incidencia',
        //     icon: 'error',
        //     confirmButtonText: 'Aceptar',
        //   });
        const response = await createIncidenciaRequest(values);
        Swal.fire({
          title: 'Exitoso!',
          text: 'Se ha registrado una incidencia',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        formik.resetForm();
      } catch (error) {
  Swal.fire({
          title: 'Error!',
          text: {error},
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
        console.log(error);
      }
    },
  });
  return (
    <>
      <FormLayout title='Registro Incidencia'>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <InputLabel>Fecha</InputLabel>
              <TextField
                type='date'
                fullWidth
                name='fecha'
                value={formik.values.fecha}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fecha && formik.errors.fecha ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.fecha}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <InputLabel>Hora</InputLabel>
              <input
                label='Hora'
                type='time'
                placeholder='Hora'
                name='hora'
                value={formik.values.hora}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.hora && formik.errors.hora ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.hora}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Descripcion'
                type='text'
                placeholder='Descripcion'
                fullWidth
                name='descripcion'
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.descripcion && formik.errors.descripcion ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.descripcion}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
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
                  return (
                    <MenuItem key={equipo.idEquipo} value={equipo.idEquipo}>
                      {equipo.nombre}
                    </MenuItem>
                  );
                })}
              </Select>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <InputLabel>Usuario</InputLabel>
              <Select
                fullWidth
                label='Usuario'
                name='usuario'
                value={formik.values.usuario}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {usuarios.map((usuario) => (
                  <MenuItem key={usuario.idUsuario} value={usuario.idUsuario}>
                    {usuario.nombre}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.usuario && formik.errors.usuario ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.usuario}
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
