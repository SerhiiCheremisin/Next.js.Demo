import React from 'react';
import styles from '/styles/globals.css';
import LayOut from "../Layout/Layout";

function MyApp({ Component, pageProps }) {

  return (
       <LayOut>
       <Component {...pageProps}/>
       </LayOut>
  )
}

export default MyApp;
