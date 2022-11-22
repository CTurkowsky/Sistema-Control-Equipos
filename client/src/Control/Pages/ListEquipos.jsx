import {useEquipos} from '../../hooks';
import {Typography, Box, CardContent, Button, Grid} from '@mui/material';
export const ListEquipos = () => {
  const {equipos, toggleEstado, deleteEquipo} = useEquipos();
  const handleDone = async (id) => {
    await toggleEstado(id);
  };

  return (
    <Grid
      sx={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignContent: 'center',
        mx: 'auto',
        backgroundColor: 'primary.main',
      }}
    >
      {equipos.map((equipo) => (
        <Box key={equipo.idEquipo} sx={{margin: 4}}>
          <CardContent>
            <Grid
              alignItems='center'
              sx={{
                minHeight: '5vh',
                backgroundColor: '#eee',
                padding: 4,
                width: 500,
                height: 400,
                borderRadius: 7,
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Typography variant='h4' component='div'>
                <a>Nombre: </a>
                {equipo.nombre}
              </Typography>
              <Typography variant='h5' component='div'>
                <a>Descripcion: </a>
                {equipo.descripcion}
              </Typography>
              <Typography variant='h5' component='div'>
                <a>Codigo: </a>
                {equipo.numeroSerie}
              </Typography>
              <h2>
                <a>Estado: </a>
                {equipo.estado}
              </h2>
              <Typography variant='body2'>
                <a>Marca: </a>
                {equipo.marca}
                <br />
              </Typography>
              <Typography variant='body2'>
                <a>Categoria: </a>
                {equipo.categoria}
              </Typography>
              <Typography
                variant='body2'
                sx={{color: equipo.disponibilidad === 'No' ? 'red' : 'none'}}
              >
                <a>Disponibilidad:</a>
                {equipo.disponibilidad}
              </Typography>
              <Button
                onClick={() => handleDone(equipo.idEquipo)}
                variant='contained'
                sx={{m: 4}}
              >
                Cambiar Estado
              </Button>
              <Button variant='contained' onClick={() => deleteEquipo(equipo.idEquipo)}>Eliminar</Button>
            </Grid>
          </CardContent>
        </Box>
      ))}
    </Grid>
  );
};
