import { Fragment, useEffect } from "react";
import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "./global.css";

const stripePromise = loadStripe("pk_test_51ORJeRFDZtq9cBLGdXiZ86RoLdZ2VuU66uPobuqmphyIpu9ev9ZNTr1HJadBce7SPkVzFWwZpZIze0a0R7bpXdap00LZ1yFeg2");

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
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
        <CssBaseline />
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      </ThemeProvider>
    </Fragment>
  );
}