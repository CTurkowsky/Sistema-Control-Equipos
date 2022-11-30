import { useMarcas } from '../../hooks';
import {
  Typography,
  Box,
  CardContent,
  Button,
  Grid,
  TextField,
} from '@mui/material';
import { ListLayout } from '../Layout/ListLayout';
import { useState } from 'react';
export const ListMarcas = () => {
  const { marcas, deleteMarca } = useMarcas();

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredMarcas = () => {
    if (search.length === 0) return marcas.slice(currentPage, currentPage + 10);

    const filtered = marcas.filter((marca) =>
      marca.marca.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.slice(currentPage, currentPage + 10);
  };

  const nextPage = () => {
    if (
      marcas.filter((marca) => marca.marca.includes(search)).length >
      currentPage + 10
    )
      setCurrentPage(currentPage + 10);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 10);
  };

  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };
  return (
    <ListLayout>
      <Grid
        sx={{
          justifyContent: 'center',
          alignContent: 'center',
          margin: 20,
        }}
      >
        <TextField
          type='text'
          className=' my-5 form-control align-self-center '
          placeholder='Burcar Marca'
          value={search}
          onChange={onSearchChange}
        />
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
          {filteredMarcas().map((marca) => (
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
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}
                >
                  <Typography variant='h4' component='div'>
                    <a>Marca: </a>
                    {marca.marca}
                  </Typography>
                  <Button
                    variant='contained'
                    onClick={() => deleteMarca(marca.idMarca)}
                  >
                    Eliminar
                  </Button>
                </Grid>
              </CardContent>
            </Box>
          ))}

        <Grid
          sx={{
            justifyContent: 'center',
            alignContent: 'center',
            margin: 20,
          }}
        >
          <nav>
            <ul className='pagination'>
              <li className='page-item'>
                <a className='page-link' onClick={prevPage}>
                  Anterior
                </a>
              </li>
              <li className='page-item active'>
                <a className='page-link'>{currentPage + 1}</a>
              </li>
              <li className='page-item'>
                <a className='page-link' onClick={nextPage}>
                  Siguiente
                </a>
              </li>
            </ul>
          </nav>
        </Grid>
        </Grid>
      </Grid>
    </ListLayout>
  );
};
