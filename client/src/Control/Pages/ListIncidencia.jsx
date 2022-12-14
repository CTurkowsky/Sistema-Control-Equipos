import { useIncidencia } from '../../hooks/useIncidencia';
import { ListLayout } from '../Layout/ListLayout';
import {
  Typography,
  Box,
  CardContent,
  Button,
  Grid,
  TextField,
} from '@mui/material';
import { useState } from 'react';
export const ListIncidencia = () => {
  const { incidencias, toggleEstado } = useIncidencia();

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  const handleEstado = async (id) => {
    await toggleEstado(id);
  };


  const filteredIncidencias = () => {
    if (search.length === 0)
      return incidencias.slice(currentPage, currentPage + 10);

    const filtered = incidencias.filter((incidencia) =>
      incidencia.fecha.includes(search)
    );
    return filtered.slice(currentPage, currentPage + 10);
  };

  const nextPage = () => {
    if (
      incidencias.filter((incidencia) => incidencia.fecha.includes(search))
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
        <Typography
          variant='h5'
          component='div'
          align='center'
          sx={{
            color: 'white',
          }}
        >
          SELECIONA FECHA INCIDENCIA
        </Typography>
        <TextField
          type='date'
          className=' my-5 form-control align-self-center '
          placeholder='Burcar Fecha'
          value={search}
          onChange={onSearchChange}
        />
        {filteredIncidencias().map((incidencia) => (
          <Box key={incidencia.idIncidencia} sx={{ margin: 4 }}>
            <CardContent>
              <Grid
                alignItems='center'
                sx={{
                  minHeight: '5vh',
                  backgroundColor: '#eee',
                  padding: 4,
                  width: 500,
                  height: 300,
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
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  <a>Estado: </a>
                  {incidencia.estado}
                </Typography>
                <Typography variant='body2'>
                  <a>Equipo: </a>
                  {incidencia.nombreEquipo}
                </Typography>
                <Typography variant='body2'>
                  <a>Usuario: </a>
                  {incidencia.nombreUsuario}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    sx={{ m: 2}}
                    variant='contained'
                    onClick={() => deletePrestamo(prestamo.idPrestamo)}
                  >
                    Eliminar
                  </Button>
                  <Button
                    onClick={() => handleEstado(incidencia.idIncidencia)}
                    variant='contained'
                    sx={{ m: 2}}
                  >
                    Cambiar Estado
                  </Button>
                </Box>
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
