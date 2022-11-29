import { useEquipoPrestamos } from '../../hooks';
import { Typography, Box, CardContent, Button, Grid } from '@mui/material';
import { ListLayout } from '../Layout/ListLayout';
export const ListEquipoPrestamo = () => {
  const { equipoprestamos, toggleCompleted, deleteEquipoPrestamo } = useEquipoPrestamos();

  const handleDone = async (id) => {
    await toggleCompleted(id);
  };
  return (
    <ListLayout>
      {equipoprestamos.map((equipoprestamo) => (
        <Box key={equipoprestamo.idEquipoPrestamo} sx={{ margin: 4 }}>
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
                <a>ID: </a>
                {equipoprestamo.idEquipoPrestamo}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                <a>Equipo: </a>
                {equipoprestamo.nombre}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                <a>idPrestamo: </a>
                {equipoprestamo.idPrestamo}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                <a>Estado Prestamo: </a>
                {equipoprestamo.estado}
              </Typography>
              {/* <Button variant='contained' sx={{ m: 4 }}>
                Editar
              </Button> */}
              <Button
                onClick={() => handleDone(equipoprestamo.idEquipoPrestamo)}
                variant='contained'
                sx={{ m: 4 }}
              >
                Completar
              </Button>
              <Button  onClick={() => deleteEquipoPrestamo(equipoprestamo.idEquipoPrestamo)}variant='contained'>Eliminar</Button>
            </Grid>
          </CardContent>
        </Box>
      ))}
    </ListLayout>
  );
};
