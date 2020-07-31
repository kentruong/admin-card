
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import Head from 'next/head';
// import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import theme from '../src/theme';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {

    // Remove the server-side injected CSS.
    // const jssStyles = document.querySelector('#jss-server-side');
    // if (jssStyles) {
    //   jssStyles.parentElement.removeChild(jssStyles);
    // }
  }, []);

  return (
    <Button variant="contained" color="primary">
      Hello Login
    </Button>
  );
}

MyApp.propTypes = {
  // Component: PropTypes.elementType.isRequired,
  // pageProps: PropTypes.object.isRequired,
};