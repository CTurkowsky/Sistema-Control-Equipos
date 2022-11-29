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
  const { incidencias } = useIncidencia();

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

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
    <ListLayout title='Incidencias'>
      <Grid>

      <TextField
        type='text'
        className=' my-5 form-control align-self-center '
        placeholder='Burcar Fecha dd-mm-yyyy'
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
              <Button
                variant='contained'
                onClick={() => deletePrestamo(prestamo.idPrestamo)}
              >
                Eliminar
              </Button>
            </Grid>
          </CardContent>
        </Box>
      ))}

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
    </ListLayout>
  );
};
