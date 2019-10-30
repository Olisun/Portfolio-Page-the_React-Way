import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Hero from "../components/Hero";


const HomePage = (props) => {

  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      {/* <Carousel /> */}
    </div>
  )
};

export default HomePage;