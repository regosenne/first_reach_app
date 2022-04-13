import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import AuctioneerBtn from './compenents/AuctioneerBtn';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuctioneerBtn txt="Auctioneer"/>
      </ThemeProvider>
    </div>
  );
}

export default App;
