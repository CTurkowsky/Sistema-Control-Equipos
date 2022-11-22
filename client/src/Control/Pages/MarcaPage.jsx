import { Button, Grid, TextField, Alert } from '@mui/material';
import { FormLayout } from '../Layout/FormLayout';
import { createMarcaRequest } from '../../api/marca.api';
import { useFormik } from 'formik';
import { useMarcas } from '../../hooks';
import * as YUP from 'yup';
import Swal from 'sweetalert2';
export const MarcaPage = () => {
  const { marcas } = useMarcas();
  const formik = useFormik({
    initialValues: {
      marca: '',
    },
    validationSchema: YUP.object({
      marca: YUP.string()
        .min(2, 'El nombre tener mas de 1 caracteres')
        .max(20, 'El nombre debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const soloMarcas = marcas.map((marca) => marca.marca);
        const matches = soloMarcas.filter((element) => {
          return values.marca.toLowerCase() == element.toLowerCase();
        });
        if (matches.length > 0)
          return Swal.fire({
            title: 'Error!',
            text: 'Marca ya existe',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        const response = await createMarcaRequest(values);
        Swal.fire({
          title: 'Exitoso!',
          text: 'Se ha registrado una marca',
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
      <FormLayout title='Registro Marca'>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Nombre'
                type='text'
                placeholder='Nombre Marca'
                fullWidth
                name='marca'
                value={formik.values.marca}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.marca && formik.errors.marca ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.marca}
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
