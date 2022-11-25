import {
  Button,
  Grid,
  Alert,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { FormLayout } from '../Layout/FormLayout';
import { useDocentes, useEquipos, useUsuarios } from '../../hooks';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import Swal from 'sweetalert2';
import { createPrestamoRequest } from '../../api/prestamo.api';
export const PrestamoPage = () => {
  const { docentes } = useDocentes();
  const { usuarios } = useUsuarios();

  const formik = useFormik({
    initialValues: {
      fecha: '',
      horaPrestamo: '',
      horaDevolucion: '',
      estado: 'Pendiente',
      docente: '',
      usuario: '',
    },
    validationSchema: YUP.object({
      fecha: YUP.date().required('La fecha es requerida'),
      docente: YUP.string().required('El docente es requerido'),
      usuario: YUP.string().required('El usuario es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await createPrestamoRequest(values);
        return Swal.fire({
          title: 'Success!',
          text: 'Se ha registrado un detalle',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        formik.resetForm();
      } catch (error) {
        return Swal.fire({
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
      <FormLayout title='Prestamo'>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2 }}>
            <InputLabel>Fecha</InputLabel>
            <input
              label='Fecha'
              type='date'
              placeholder='Fecha Prestamo'
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
              <InputLabel>Hora Prestamo</InputLabel>
              <input
                label='Hora'
                type='time'
                placeholder='Hora Prestamo'
                name='horaPrestamo'
                value={formik.values.horaPrestamo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.horaPrestamo && formik.errors.horaPrestamo ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.horaPrestamo}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <InputLabel>Hora Devolucion</InputLabel>
              <input
                label='Hora'
                type='time'
                placeholder='Hora Devolucion'
                name='horaDevolucion'
                value={formik.values.horaDevolucion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.horaDevolucion && formik.errors.horaDevolucion ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.horaDevolucion}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <InputLabel>Docente</InputLabel>
              <Select
                fullWidth
                label='Docente'
                name='docente'
                value={formik.values.docente}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {docentes.map((docente) => (
                  <MenuItem key={docente.idDocente} value={docente.idDocente}>
                    {docente.nombre +
                      ' ' +
                      docente.apellidoPaterno +
                      ' ' +
                      docente.apellidoMaterno}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.docente && formik.errors.docente ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.docente}
                </Alert>
              ) : null}
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
