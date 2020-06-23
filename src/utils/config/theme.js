import { createMuiTheme } from '@material-ui/core'

// Import fonts
import GroldBold from './../assets/fonts/Grold/Grold-Bold.ttf'
import GroldMedium from './../assets/fonts/Grold/Grold-Medium.ttf'
import GroldRegular from './../assets/fonts/Grold/Grold-Regular.ttf'

const grold = [
  {
    fontFamily: 'Grold', 
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Grold'),
      local('Grold-Regular'),
      url(${GroldRegular}) format('trueType')
    `,
  },
  {
    fontFamily: 'Grold', 
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
      local('Grold'),
      local('Grold-Bold'),
      url(${GroldBold}) format('trueType')
    `,
  },
  {
    fontFamily: 'Grold', 
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
      local('Grold'),
      local('Grold-Medium'),
      url(${GroldMedium}) format('trueType')
    `,
}
]

export default createMuiTheme({
  palette: {
    primary: {
      main: '#E05858'
    },
    secondary: {
      main: '#21232E',
    },
    background: {
      default: '#2D2F3D',
      paper: '#3A3D4D'
    }
  },
  typography: {
    h1: {
       fontFamily: ['Grold', 'Roboto'].join(',')
    },
    h2: {
      fontFamily: ['Grold', 'Roboto'].join(',')
    }, 
    h3: {
      fontFamily: ['Grold', 'Roboto'].join(',')
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [...grold]
      }
    }
  }
})