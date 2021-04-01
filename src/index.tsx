import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fireflies } from './Fireflies/Fireflies';
import './index.css';
import { MathsApp } from './MathsApp/MathsApp';
import { Overview } from './Overview/Overview';
import { PrivacyStatement } from './PrivacyStatement/PrivacyStatement';
import { Contact } from './Contact/Contact';
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
    h4: {
      fontSize: 16,
      marginTop: 20,
    },
  },
  props: {
    MuiTooltip: {
      interactive: true,
      leaveDelay: 300,
      enterTouchDelay: 0,
      leaveTouchDelay: 10000,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '13px',
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/MathsApp">
            <MathsApp />
          </Route>
          <Route path="/Fireflies">
            <Fireflies />
          </Route>
          <Route path="/PrivacyStatement">
            <PrivacyStatement />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Overview />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('main')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
