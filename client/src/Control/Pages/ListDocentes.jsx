import { useDocentes } from '../../hooks';
import {
  Typography,
  Box,
  CardContent,
  Button,
  Grid,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { ListLayout } from '../Layout/ListLayout';
export const ListDocentes = () => {
  const { docentes, deleteDocente } = useDocentes();

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredDocentes = () => {
    if (search.length === 0)
      return docentes.slice(currentPage, currentPage + 10);

    const filtered = docentes.filter((docente) =>
      docente.nombre.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.slice(currentPage, currentPage + 10);
  };

  const nextPage = () => {
    if (
      docentes.filter((docente) => docente.nombre.includes(search)).length >
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
          placeholder='Burcar Docente'
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
          {filteredDocentes().map((docente) => (
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
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}
                >
                  <Typography variant='h4' component='div'>
                    <a>Docente: </a>
                    {docente.nombre} {docente.apellidoPaterno}{' '}
                    {docente.apellidoMaterno}
                  </Typography>
                <Box sx={{ display: 'flex',justifyContent: 'center' }}>
                  <Button
                    sx={{ mt: 2}}
                    variant='contained'
                    onClick={() => deleteDocente(docente.idDocente)}
                  >
                    Eliminar
                  </Button>
                </Box>
                </Grid>
              </CardContent>
            </Box>
          ))}
        </Grid>
      </Grid>
    </ListLayout>
  );
};
