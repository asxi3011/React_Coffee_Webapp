

import { React,memo } from "react"
import {Carousel} from "react-bootstrap"
const imga = "https://minio.thecoffeehouse.com/image/admin/BANNERWEB(3)_728110.jpg" ;
const imgb = "https://minio.thecoffeehouse.com/image/admin/bannerhomeWEB-Caphetainha_409405.jpg";
const imgc = "https://minio.thecoffeehouse.com/image/admin/WEB-bannehome-TUNGTANG_778598.jpg";
function Slider(){
    console.log("Xuất Slider");
    return(<Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imga}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgb}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgc}
            alt="Third slide"
          />  
        </Carousel.Item>
      </Carousel>)
    
    
}

export default memo(Slider)