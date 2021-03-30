import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fireflies } from './Fireflies/Fireflies';
import './index.css';
import { MathsApp } from './MathsApp/MathsApp';
import { Overview } from './Overview/Overview';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 30,
      marginTop: 20,
      marginBottom: 10,
    },
    h2: {
      fontSize: 22,
      marginTop: 20,
      marginBottom: 10,
    },
    h3: {
      fontSize: 18,
      marginTop: 20,
      marginBottom: 10,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/mathsapp">
            <MathsApp />
          </Route>
          <Route path="/fireflies">
            <Fireflies />
          </Route>
          <Route path="/">
            <Overview />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
