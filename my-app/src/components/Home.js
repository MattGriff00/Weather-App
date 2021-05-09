  
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Home(){
    return(
      <BrowserRouter>
        <Link to={"/route"}><button className='btnHome'>Return To Homepage</button></Link>
          <Route
            path="/route"
            component={() => {
              var link = document.createElement("a");
              link.href = "https://www.ign.com";
              document.body.appendChild(link);

              link.click();
              return null;
            }}
          />
      </BrowserRouter>
      ); 
}