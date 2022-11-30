import { useCategorias } from '../../hooks';
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
export const ListCategorias = () => {
  const { categorias, deleteCategoria } = useCategorias();

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredCategorias = () => {
    if (search.length === 0)
      return categorias.slice(currentPage, currentPage + 10);

    const filtered = categorias.filter((categoria) =>
      categoria.categoria.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.slice(currentPage, currentPage + 10);
  };

  const nextPage = () => {
    if (
      categorias.filter((categoria) => categoria.categoria.includes(search))
        .length >
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
          placeholder='Burcar Categoria'
          value={search}
          onChange={onSearchChange}
        />

        {filteredCategorias().map((categoria) => (
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
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <Typography variant='h4' component='div'>
                  <a>Categoria: </a>
                  {categoria.categoria}
                </Typography>
                <Button
                  variant='contained'
                  onClick={() => deleteCategoria(categoria.idCategoria)}
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
    </ListLayout>
  );
};
