import { useDocentes } from '../../hooks';
import { Typography, Box, CardContent, Button, Grid } from '@mui/material';
import { ListLayout } from '../Layout/ListLayout';
export const ListDocentes = () => {
  const { docentes } = useDocentes();
  return (
    <Grid
       sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignContent: 'center',
          mx:  'auto',
        backgroundColor: 'primary.main',
        }} >

      {docentes.map((docente) => (
        <Box key={docente.idDocente} sx={{ margin: 4 }}>

          <CardContent>
            <Grid
              alignItems='center'
              sx={{
                minHeight: '5vh',
                backgroundColor: '#eee',
                padding: 4,
                width: 500,
                height: 200,
                borderRadius: 7,
              justifyContent:'center',
                alignContent: 'center'
              }}
            >
              <Typography variant='h4' component='div'>
                <a>Docente: </a>
                {docente.nombre}{' '}{docente.apellidoPaterno}{' '}{docente.apellidoMaterno}
              </Typography>
            </Grid>
          </CardContent>
        </Box>
      ))}

    </Grid>
  );
};



