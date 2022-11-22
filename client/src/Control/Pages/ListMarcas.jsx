import { useMarcas } from '../../hooks';
import { Typography, Box, CardContent, Button, Grid } from '@mui/material';
import { ListLayout } from '../Layout/ListLayout';
export const ListMarcas = () => {
  const { marcas, deleteMarca } = useMarcas();
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

      {marcas.map((marca) => (
        <Box key={marca.idMarca} sx={{ margin: 4 }}>

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
                <a>Marca: </a>
                {marca.marca}
              </Typography>
              <Button variant='contained' onClick={() => deleteMarca(marca.idMarca)}>Eliminar</Button>
            </Grid>
          </CardContent>
        </Box>
      ))}

    </Grid>
  );
};


