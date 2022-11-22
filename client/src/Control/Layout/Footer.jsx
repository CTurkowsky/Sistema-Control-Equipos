import { Block } from '@mui/icons-material';
import {Container, Box, Link, Grid} from '@mui/material';
export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#ffff"
        color="black"
      >
        <Container maxWidth="lg">
       
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <img  style={ { height: 100, display: Block, margin: 'auto' }}src="https://files.fm/thumb_show.php?i=9wacxguyb"></img>
           &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}