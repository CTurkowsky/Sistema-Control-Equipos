import { useCategorias } from '../../hooks';
import { Typography, Box, CardContent, Button, Grid } from '@mui/material';
import { ListLayout } from '../Layout/ListLayout';
export const ListCategorias = () => {
  const { categorias, deleteCategoria } = useCategorias();


  
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

      {categorias.map((categoria) => (
        <Box key={categoria.idCategoria} sx={{ margin: 4 }}>

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
                <a>Categoria: </a>
                {categoria.categoria}
              </Typography>
              <Button variant='contained' onClick={() => deleteCategoria(categoria.idCategoria)}>Eliminar</Button>
            </Grid>
          </CardContent>
        </Box>
      ))}

    </Grid>
  );
};

