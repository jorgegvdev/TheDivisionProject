import { useState, useEffect, useMemo } from 'react'
import EquipmentList from './components/EquipmentList'
import {
  CssBaseline,
  Typography,
  Container,
  Switch,
  FormControlLabel,
  createTheme,
  ThemeProvider,
} from '@mui/material'

const displayFont = '"Barlow Condensed", "Barlow", sans-serif'

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const theme = useMemo(
    () =>
      createTheme({
        palette: darkMode
          ? {
              mode: 'dark',
              primary: { main: '#ff7a1a', contrastText: '#14110d' },
              text: { primary: '#ece8e1', secondary: '#a39d92' },
              background: { default: '#0f1114', paper: '#171a1f' },
              divider: '#2a2f37',
            }
          : {
              mode: 'light',
              primary: { main: '#c4480a', contrastText: '#ffffff' },
              text: { primary: '#1d1b18', secondary: '#5f5a52' },
              background: { default: '#f3f0ea', paper: '#fcfbf8' },
              divider: '#ddd7cb',
            },
        shape: { borderRadius: 6 },
        typography: {
          fontFamily: '"Barlow", system-ui, sans-serif',
          h5: {
            fontFamily: displayFont,
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          },
          subtitle1: {
            fontFamily: displayFont,
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '1.2rem',
          },
        },
      }),
    [darkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: { xs: 3, sm: 5 } }}>
        <Typography variant="h5" component="h1" sx={{ textAlign: 'center', fontSize: { xs: '1.6rem', sm: '2.1rem' } }}>
          Contador de Sets Confidenciales!
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
          label="Modo Oscuro"
          sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 4 }}
        />
        <EquipmentList />
      </Container>
    </ThemeProvider>
  )
}
