import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const greenTheme = createTheme({

    palette: {
        primary: {
            main: '#66bb6a'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})
