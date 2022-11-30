import {
  Button,
  Grid,
  TextField,
  Alert,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { FormLayout } from '../Layout/FormLayout';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { createDocenteRequest } from '../../api/docente.api';
import { useDocentes } from '../../hooks';
import Swal from 'sweetalert2';
export const DocentePage = () => {
  const { docentes } = useDocentes();
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      numeroCelular: '',
      grado: '',
      seccion: '',
    },
    validationSchema: YUP.object({
      nombre: YUP.string()
        .min(3, 'El nombre tener mas de 3 caracteres')
        .max(20, 'El nombre debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
      apellidoPaterno: YUP.string()
        .min(3, 'El apellido paterno debe tener mas de 3 caracteres')
        .max(50, 'El apellido paterno debe tener maximo  50 caracteres')
        .required('La descripcion es requerido'),
      apellidoMaterno: YUP.string()
        .min(3, 'El apellido materno debe tener mas de 3 caracteres')
        .max(50, 'El apellido materno debe tener maximo  50 caracteres')
        .required('El numero es requerido'),
      numeroCelular: YUP.number()
        .positive('El numero debe ser valido')
        .min(9, 'Ingrese 9 digitos')
        .required('El numero de celular es requerido'),

      grado: YUP.string().required('El grado es requerido'),
      seccion: YUP.string().required('La seccion es requerida'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        if (
          docentes.find(
            (docente) =>
              docente.apellidoPaterno === values.apellidoPaterno &&
              docente.apellidoMaterno === values.apellidoMaterno &&
              docente.nombre === values.nombre
          )
        )
          return Swal.fire({
            title: 'Error!',
            text: 'Docente ya existe',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        const response = await createDocenteRequest(values);
        formik.resetForm();
        return Swal.fire({
          title: 'Success!',
          text: 'Se ha registrado un docente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <FormLayout title='Docente'>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Nombre'
                type='text'
                placeholder='Nombre del Docente'
                fullWidth
                name='nombre'
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nombre && formik.errors.nombre ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.nombre}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Apellido Paterno'
                type='text'
                placeholder='Apellido Paterno'
                fullWidth
                name='apellidoPaterno'
                value={formik.values.apellidoPaterno}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.apellidoPaterno &&
              formik.errors.apellidoPaterno ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.apellidoPaterno}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Apellido Materno'
                type='text'
                placeholder='Apellido Materno'
                fullWidth
                name='apellidoMaterno'
                value={formik.values.apellidoMaterno}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.apellidoMaterno &&
              formik.errors.apellidoMaterno ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.apellidoMaterno}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Numero Celular'
                type='text'
                placeholder='999999999'
                fullWidth
                name='numeroCelular'
                value={formik.values.numeroCelular}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.numeroCelular && formik.errors.numeroCelular ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.numeroCelular}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <InputLabel>Grado</InputLabel>
              <Select
                onChange={formik.handleChange}
                value={formik.values.grado}
                onBlur={formik.handleBlur}
                label='Grado'
                name='grado'
                fullWidth
              >
                <MenuItem value={1}>1º</MenuItem>
                <MenuItem value={2}>2º</MenuItem>
                <MenuItem value={3}>3º</MenuItem>
                <MenuItem value={4}>4º</MenuItem>
                <MenuItem value={5}>5º</MenuItem>
                <MenuItem value={6}>6º</MenuItem>
              </Select>
              {formik.touched.grado && formik.errors.grado ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.grado}
                </Alert>
              ) : null}
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <InputLabel>Seccion</InputLabel>
              <Select
                onChange={formik.handleChange}
                value={formik.values.seccion}
                onBlur={formik.handleBlur}
                label='Seccion'
                name='seccion'
                fullWidth
              >
                <MenuItem value={'Primaria'}>Primaria</MenuItem>
                <MenuItem value={'Secundaria'}>Secundaria</MenuItem>
              </Select>
              {formik.touched.seccion && formik.errors.seccion ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.seccion}
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
