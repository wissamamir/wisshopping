import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Tdata from "./Tdata"
import { useState,useEffect } from "react"

const TopCart = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
  }
  useEffect(() => {

    const handleResize = () => {
      if(window.innerWidth < 450){

        setSlidesToShow(1);
      }
     else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);

  
  }, []);
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft'>{value.para}</span>
                  <span className='tright'>{value.desc}</span>
                </div>
                <div className='img'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
