import { usePrestamos } from '../../hooks';
import { Typography, Box, CardContent, Button, Grid } from '@mui/material';
import { ListLayout } from '../Layout/ListLayout';
export const ListPrestamos = () => {
  const { prestamos, deletePrestamo, toggleCompleted } = usePrestamos();

  const handleDone = async (id) => {
    await toggleCompleted(id);
  };
  return (
    <ListLayout>
      {prestamos.map((prestamo) => (
        <Box key={prestamo.idPrestamo} sx={{ margin: 4 }}>
          <CardContent>
            <Grid
              alignItems='center'
              sx={{
                minHeight: '5vh',
                backgroundColor: '#eee',
                padding: 4,
                width: 500,
                height: 350,
                borderRadius: 7,
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Typography variant='h5' component='div'>
                <a>Estado: </a>
                {prestamo.estado}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                <a>Fecha: </a>
                {prestamo.fecha}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                <a>Hora Prestamo: </a>
                {prestamo.horaPrestamo}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                <a>Hora Devolucion: </a>
                {prestamo.horaDevolucion}
              </Typography>
              <Typography variant='body2'>
                <a>Docente: </a>
                {prestamo.nombreDocente}
              </Typography>
              <Typography variant='body2'>
                <a>Usuario: </a>
                {prestamo.nombreUsuario}
              </Typography>
              <Typography variant='body2'>
                <a>Estado: </a>
                {prestamo.estado}
              </Typography>
              {/* <Button variant='contained' sx={{ m: 4 }}>
                Editar
              </Button> */}
              <Button
                onClick={() => handleDone(prestamo.idPrestamo)}
                variant='contained'
                sx={{ m: 4 }}
              >
                Completar
              </Button>
              <Button variant='contained' onClick={() => deletePrestamo(prestamo.idPrestamo)}>Eliminar</Button>
            </Grid>
          </CardContent>
        </Box>
      ))}
    </ListLayout>
  );
};
