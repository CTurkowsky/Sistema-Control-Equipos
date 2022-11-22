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
import { createEquipoRequest } from '../../api/equipoInformatico.api';
import { useMarcas, useCategorias, useEquipos } from '../../hooks';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import Swal from 'sweetalert2';
export const EquipoInformaticoPage = () => {
  const { marcas } = useMarcas();
  const { categorias } = useCategorias();
  const { equipos } = useEquipos();
  const formik = useFormik({
    initialValues: {
      nombre: '',
      descripcion: '',
      categoria: '',
      numeroSerie: '',
      estado: '',
      marca: '',
      disponibilidad: 'Si',
    },
    validationSchema: YUP.object({
      nombre: YUP.string()
        .min(3, 'El nombre tener mas de 3 caracteres')
        .max(20, 'El nombre debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
      descripcion: YUP.string()
        .min(3, 'La descripcion debe tener mas de 3 caracteres')
        .max(50, 'La descripcion debe tener maximo  50 caracteres')
        .required('La descripcion es requerido'),
      numeroSerie: YUP.string()
        .min(3, 'El numero de serie debe tener mas de 3 caracteres')
        .max(50, 'El numero de serie debe tener maximo  50 caracteres')
        .required('El numero es requerido'),
      marca: YUP.string().required('La marca es requerida'),
      estado: YUP.string().required('El estado  es requerida'),
      categoria: YUP.string().required('La categoria es requerida'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        if (equipos.find((equipo) => equipo.numeroSerie === values.numeroSerie))
          return Swal.fire({
            title: 'Error!',
            text: 'Codigo ya existe',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        const response = await createEquipoRequest(values);
        Swal.fire({
          title: 'Exitoso!',
          text: 'Se ha registrado un producto',
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
      <FormLayout title='Equipo Informatico'>
        <form onSubmit={formik.handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Nombre'
                type='text'
                placeholder='Nombre del equipo'
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
              <InputLabel>Categoria</InputLabel>
              <Select
                fullWidth
                label='Categoria'
                name='categoria'
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {categorias.map((categoria) => (
                  <MenuItem
                    key={categoria.idCategoria}
                    value={categoria.idCategoria}
                  >
                    {categoria.categoria}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.categoria && formik.errors.categoria ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.categoria}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label='Numero Serie'
                type='text'
                placeholder='Numero Serie'
                fullWidth
                name='numeroSerie'
                value={formik.values.numeroSerie}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.numeroSerie && formik.errors.numeroSerie ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.numeroSerie}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <InputLabel>Estado</InputLabel>
              <Select
                onChange={formik.handleChange}
                value={formik.values.estado}
                onBlur={formik.handleBlur}
                label='Estado'
                name='estado'
                fullWidth
              >
                <MenuItem value={'Operativo'}>Operativo</MenuItem>
                <MenuItem value={'Necesita Reparacion'}>
                  Necesita Reparacion
                </MenuItem>
              </Select>
              {formik.touched.estado && formik.errors.estado ? (
                <Alert sx={{ mt: 2 }} severity='error'>
                  {formik.errors.estado}
                </Alert>
              ) : null}
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <InputLabel>Marca</InputLabel>
              <Select
                fullWidth
                label='Marca'
                name='marca'
                value={formik.values.marca}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {marcas.map((marca) => (
                  <MenuItem key={marca.idMarca} value={marca.idMarca}>
                    {marca.marca}
                  </MenuItem>
                ))}
              </Select>
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
