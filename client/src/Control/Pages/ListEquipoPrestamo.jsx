import { useEquipoPrestamos } from '../../hooks';
import { Typography, Box, CardContent, Button, Grid } from '@mui/material';
import { ListLayout } from '../Layout/ListLayout';
export const ListEquipoPrestamo = () => {
  const { equipoprestamos, toggleCompleted, deleteEquipoPrestamo } =
    useEquipoPrestamos();

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
                height: 250,
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
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  onClick={() => handleDone(equipoprestamo.idEquipoPrestamo)}
                  variant='contained'
                  sx={{ m: 2 }}
                >
                  Completar
                </Button>
                <Button
                  sx={{ m: 2 }}
                  onClick={() =>
                    deleteEquipoPrestamo(equipoprestamo.idEquipoPrestamo)
                  }
                  variant='contained'
                >
                  Eliminar
                </Button>
              </Box>
            </Grid>
          </CardContent>
        </Box>
      ))}
    </ListLayout>
  );
};
