import { useIncidencia } from "../../hooks/useIncidencia"
import { ListLayout } from "../Layout/ListLayout"
import { Typography, Box, CardContent, Button, Grid } from '@mui/material';
export const ListIncidencia = () => {
  const { incidencias } = useIncidencia();
  return (
  <ListLayout title = 'Incidencias'>
 {incidencias.map((incidencia) => (
        <Box key={incidencia.idIncidencia} sx={{ margin: 4 }}>
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
                <a>Fecha: </a>
                {incidencia.fecha}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                <a>Hora: </a>
                {incidencia.hora}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                <a>Descripcion: </a>
                {incidencia.descripcion}
              </Typography>
              <Typography variant='body2'>
                <a>Equipo: </a>
                {incidencia.nombreEquipo}
              </Typography>
              <Typography variant='body2'>
                <a>Usuario: </a>
                {incidencia.nombreUsuario} 
              </Typography>
              {/* <Button variant='contained' sx={{ m: 4 }}>
                Editar
              </Button> */}
              <Button variant='contained' onClick={() => deletePrestamo(prestamo.idPrestamo)}>Eliminar</Button>
            </Grid>
          </CardContent>
        </Box>
      ))}
  </ListLayout>
  )
}
