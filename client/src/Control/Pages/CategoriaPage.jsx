import { Button, Grid, TextField, Alert } from '@mui/material';
import { FormLayout } from '../../Control/Layout/FormLayout';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { createCategoriaRequest } from '../../api/categoria.api';
import { useCategorias } from '../../hooks';
import Swal from 'sweetalert2';
export const CategoriaPage = () => {
  const { categorias } = useCategorias();
  const formik = useFormik({
    initialValues: {
      categoria: '',
    },
    validationSchema: YUP.object({
      categoria: YUP.string()
        .min(3, 'El nombre tener mas de 3 caracteres')
        .max(20, 'El nombre debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const soloCategorias = categorias.map(
          (categoria) => categoria.categoria
        );
        const matches = soloCategorias.filter((element) => {
          return values.categoria.toLowerCase() == element.toLowerCase();
        });
        if (matches.length > 0)
          return Swal.fire({
            title: 'Error!',
            text: 'Categoria ya existe',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        const response = await createCategoriaRequest(values);
        Swal.fire({
          title: 'Exitoso!',
          text: 'Se ha registrado una categoria',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <FormLayout title='Registro Categoria'>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Nombre'
                type='text'
                placeholder='Nombre Categoria'
                fullWidth
                name='categoria'
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.categoria && formik.errors.categoria ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.categoria}
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
