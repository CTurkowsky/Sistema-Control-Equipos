import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Link, Button, Grid, TextField, Typography, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { createUsuarioRequest } from '../../api/usuario.api';
import { useUsuarios } from '../../hooks';
import Swal from 'sweetalert2';
export const RegisterPage = () => {
  const { usuarios } = useUsuarios()
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      numeroCelular: '',
      correo: '',
      password: '',
      rol: 'admin',
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

      correo: YUP.string().required('El grado es requerido'),
      password: YUP.string().required('La seccion es requerida'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        if (
          usuarios.find(
            (usuario) =>
              usuario.apellidoPaterno === values.apellidoPaterno &&
              usuario.apellidoMaterno === values.apellidoMaterno &&
              usuario.nombre === values.nombre
          )
        )
          return Swal.fire({
            title: 'Error!',
            text: 'Usuario ya existe',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        const response = await createUsuarioRequest(values);
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <AuthLayout title='Registro'>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre Completo'
              type='text'
              placeholder='Tu nombre completo'
              name='nombre'
              fullWidth
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
              placeholder='Tu Apellido Paterno'
              name='apellidoPaterno'
              fullWidth
              value={formik.values.apellidoPaterno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.apellidoPaterno && formik.errors.apellidoPaterno ? (
              <Alert sx={{ mt: 2 }} severity='error'>
                {formik.errors.apellidoPaterno}
              </Alert>
            ) : null}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Apellido Materno'
              type='text'
              placeholder='Tu Apellido Materno'
              name='apellidoMaterno'
              fullWidth
              value={formik.values.apellidoMaterno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.apellidoMaterno && formik.errors.apellidoMaterno ? (
              <Alert sx={{ mt: 2 }} severity='error'>
                {formik.errors.apellidoMaterno}
              </Alert>
            ) : null}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Numero de Celular'
              type='text'
              placeholder='Ingresa tu numero de Celular'
              name='numeroCelular'
              fullWidth
              value={formik.values.numeroCelular}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.numeroCelular && formik.errors.numeroCelular? (
              <Alert sx={{ mt: 2 }} severity='error'>
                {formik.errors.numeroCelular}
              </Alert>
            ) : null}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              name='correo'
              placeholder='correo@email.com'
              fullWidth
              value={formik.values.correo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.correo && formik.errors.correo ? (
              <Alert sx={{ mt: 2 }} severity='error'>
                {formik.errors.correo}
              </Alert>
            ) : null}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              name='password'
              placeholder='********'
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
