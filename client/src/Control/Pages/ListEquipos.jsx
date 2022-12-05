import { useEquipos } from '../../hooks';
import { useState } from 'react';
import {
  Typography,
  Box,
  CardContent,
  Button,
  Grid,
  TextField,
} from '@mui/material';
import { ListLayout } from '../Layout/ListLayout';
export const ListEquipos = () => {
  const { equipos, toggleEstado, toggleDisponibilidad, deleteEquipo } =
    useEquipos();
  const handleDone = async (id) => {
    await toggleEstado(id);
  };

  const handleDisponibilidad = async (id) => {
    await toggleDisponibilidad(id);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredEquipos = () => {
    if (search.length === 0)
      return equipos.slice(currentPage, currentPage + 10);

    const filtered = equipos.filter((equipo) =>
      equipo.nombre.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.slice(currentPage, currentPage + 10);
  };

  const nextPage = () => {
    if (
      equipos.filter((equipo) => equipo.nombre.includes(search)).length >
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
          placeholder='Burcar Equipo'
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
          {filteredEquipos().map((equipo) => (
            <Box key={equipo.idEquipo} sx={{ margin: 4 }}>
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
                    sx={{
                      color: equipo.disponibilidad === 'No' ? 'red' : 'none',
                    }}
                  >
                    <a>Disponibilidad:</a>
                    {equipo.disponibilidad}
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      onClick={() => handleDone(equipo.idEquipo)}
                      variant='contained'
                      sx={{ m: 2 }}
                    >
                      Cambiar Estado
                    </Button>
                    <Button
                      onClick={() => handleDisponibilidad(equipo.idEquipo)}
                      variant='contained'
                      sx={{ m: 'auto' }}
                    >
                      Cambiar Disponibilidad
                    </Button>
                    <Button
                      sx={{ m: 2 }}
                      variant='contained'
                      onClick={() => deleteEquipo(equipo.idEquipo)}
                    >
                      Eliminar
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
      </Grid>
    </ListLayout>
  );
};
