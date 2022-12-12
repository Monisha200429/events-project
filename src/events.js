import "./App.css";
import React from "react";
import Post from "./post";
import "./post.css";
import Carousel from "./carousel";
import './carousel.css'
import Nav from  "./nav";
import Footer from "./footer";
import "./footer.css";
function Events() {
  return (
      <><div>
  <Nav />
        <br></br>
       
        <Carousel /> 
      
        <br></br>
        <Post />
        <br></br>
        <Footer/>
      </div>
      </>
  );
}

export default Events;
   