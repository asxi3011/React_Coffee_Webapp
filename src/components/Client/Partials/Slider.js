

import { React,memo } from "react"
import {Carousel} from "react-bootstrap"
import {fetchSlider} from "../../../redux/callApi";
import {useAsync} from "react-use";
const imga = "https://minio.thecoffeehouse.com/image/admin/BANNERWEB(3)_728110.jpg" ;
const imgb = "https://minio.thecoffeehouse.com/image/admin/bannerhomeWEB-Caphetainha_409405.jpg";
const imgc = "https://minio.thecoffeehouse.com/image/admin/WEB-bannehome-TUNGTANG_778598.jpg";
// const urlDev = "https://sever-coffeehouse.herokuapp.com/uploads/";
const urlDev = "http://localhost:3030/uploads/";  
function Slider(){
    const slider = useAsync(fetchSlider)
    return(
      (!slider.loading && slider.value) ?
    <Carousel>
      {slider.value.map((e)=><Carousel.Item><img className="d-block w-100" src={`${urlDev}${e.imageSlider}`} alt={e.nameSlider} /></Carousel.Item>)}
      </Carousel>
        : <div>loading...</div>
      )
}

export default memo(Slider)