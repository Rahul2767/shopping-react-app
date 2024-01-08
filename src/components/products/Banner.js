import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function Banner() {
  return (
    <Carousel className="w-100">
      <Carousel.Item>
        <Image src="/kid.jpg" className="w-100" style={{ height: "600px" }} />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/reb.jpg" className="w-100" style={{ height: "600px" }} />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/ddd.jpg" className="w-100" style={{ height: "600px" }} />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
