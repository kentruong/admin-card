
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "../node_modules/@material-ui/core/styles";
import "../styles/globals.css"
// import Head from 'next/head';
// import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import theme from '../src/theme';


const useStyles = makeStyles((theme) => ({
    body: {
        margin: 0,
        padding: 0
    }
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
        <div className="root-app">
            <Component {...pageProps} />
        </div>
    );
}

MyApp.propTypes = {
    // Component: PropTypes.elementType.isRequired,
    // pageProps: PropTypes.object.isRequired,
};

//https://admin-cards.herokuapp.com