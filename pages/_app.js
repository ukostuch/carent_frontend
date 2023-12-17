import { Fragment, useEffect } from "react";
import Head from "next/head";

import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import "./global.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme({
    palette: {
      warning: {
        dark: "rgba(33,13,3,1)",
        light: "rgba(155,151,146,1)",
        main: "rgba(237,98,2,1)",
      },
      primary: {
        main: "rgba(102,95,92,0.9)",
        light: "rgba(240,99,2,1)",
        dark: "rgba(103,105,107,1)",
      },
    },
  });

  return (
    <Fragment>
      <Head>
        <title>Frontend_IO</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}
