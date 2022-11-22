import { Grid, Typography } from '@mui/material';

export const ListLayout = ({ children, title = '' }) => {
  return (
  
      <Grid
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignContent: 'center',
          mx:  'auto',
        backgroundColor: 'primary.main',
        }}
      >
        <Typography variant='h5' sx={{ mb: 1 }}>
          {title}{' '}
        </Typography>
        {children}
      </Grid>
  );
};
