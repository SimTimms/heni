import { createTheme } from '@mui/system';

export const customTheme: {} = createTheme({
  typography: {
    h1: {
      fontSize: '3rem',
      fontFamily: `'Courier Prime', monospace`
    },
    h2: {
      fontSize: '2.4rem',
      fontFamily: `'Courier Prime', monospace`
    },
    h3: {
      fontSize: '1.2rem',
      fontFamily: `'Courier Prime', monospace`
    },
    h4: {
      fontSize: '1rem',
      fontFamily: `'Courier Prime', monospace`,
      margin: 0
    },
    body1: {
      fontSize: '0.8rem',
      fontFamily: `'Courier Prime', monospace`
    }
  },
  palette: {
    primary: {
      main: '#f1f1f1',
      contrastText: '#444'
    },
    secondary: {
      main: '#cacaca'
    },
    white: { main: '#fafafa' }
  }
});
