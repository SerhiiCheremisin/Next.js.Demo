import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import React from 'react';

const LayOut = ({children}) => {
    return(
      <>
        <Header/>
          {children}
        <Footer/>
       </>
    )

}

export default LayOut;
