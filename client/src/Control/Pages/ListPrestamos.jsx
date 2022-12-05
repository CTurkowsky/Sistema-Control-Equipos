import { usePrestamos } from '../../hooks';
import { Typography, Box, Button, Grid, TextField } from '@mui/material';
import { ListLayout } from '../Layout/ListLayout';
import { useState } from 'react';
export const ListPrestamos = () => {
  const { prestamos, deletePrestamo, toggleCompleted } = usePrestamos();
  const handleDone = async (id) => {
    await toggleCompleted(id);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredPrestamos = () => {
    if (search.length === 0)
      return prestamos.slice(currentPage, currentPage + 10);

    const filtered = prestamos.filter((prestamo) =>
      prestamo.fecha.includes(search)
    );
    return filtered.slice(currentPage, currentPage + 10);
  };

  const nextPage = () => {
    if (
      prestamos.filter((prestamo) => prestamo.fecha.includes(search)).length >
      currentPage + 10
    )
      setCurrentPage(currentPage + 10);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 10);
  };

  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    console.log(target.value);
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
        <Typography
          variant='h5'
          component='div'
          align='center'
          sx={{
            color: 'white',
          }}
        >
          SELECIONA FECHA PRESTAMO
        </Typography>
        <TextField
          type='date'
          className=' my-5 form-control align-self-center '
          placeholder='Burcar Fecha'
          value={search}
          onChange={onSearchChange}
        />

        {filteredPrestamos().map((prestamo) => (
          <Box key={prestamo.idPrestamo} sx={{ margin: 4 }}>
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
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  onClick={() => handleDone(prestamo.idPrestamo)}
                  variant='contained'
                  sx={{ m: 2 }}
                >
                  Completar
                </Button>
                <Button
                  sx={{ m: 2 }}
                  variant='contained'
                  onClick={() => deletePrestamo(prestamo.idPrestamo)}
                >
                  Eliminar
                </Button>
              </Box>
            </Grid>
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
