

import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import PerformanceCard from "./PerformanceCard";
import React, { Component } from "react";

export default class PerformanceCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  state = {
    activeSlide: 0
  };

  render() {
    const PERFORMANCE_LIST = [
      
      { dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" },
      { dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" }
      //,{ dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" }
      //,{ dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" }

    ];

    const SLIDES_TO_SHOW = (PERFORMANCE_LIST.length <= 3 ? PERFORMANCE_LIST.length : 3);
    const INITIAL_SLIDE = ((PERFORMANCE_LIST.length <= 2 ? 0 : 1))
    this.setState({activeSlide: INITIAL_SLIDE})

    const settings = {
      infinite:true,
      slidesToShow: SLIDES_TO_SHOW,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      initialSlide: INITIAL_SLIDE,
      beforeChange: (current, next) => this.setState({activeSlide: next}), 
    };
    return (
      <div className='cards slider'>
        <Slider ref={c => (this.slider = c)} {...settings}>
            {PERFORMANCE_LIST.map((card, idx) => (
                <div className={idx === this.state.activeSlide ? "slide activeSlide" : "slide"} key={card}>
                    <PerformanceCard next = {this.next} previous = {this.previous} active = {idx === this.state.activeSlide ? 1 : 0} index={idx}{...card} />
                </div>
            ))}
        </Slider>
      </div>
    )
  }
}
/** 
import { useState } from "react";
import Slider from "react-slick";
import pic1 from "../public/dance/index-header.jpg";
import pic2 from "../public/dance/index-header.jpg";
import pic3 from "../public/dance/index-header.jpg";
import pic4 from "../public/dance/index-header.jpg";
import pic5 from "../public/dance/index-header.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [pic1, pic2, pic3, pic4, pic5];

function App() {

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

const [imgIndex,setImgIndex] = useState(0)

const settings = {
  infinite:true,
  lazyLoad: true,
  speed: 300,
  slidesToShow:3,
  centerMode: true,
  centerPadding: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  beforeChange: (current, next) => setImgIndex(next), 
};


  return (
    <div className="App">
      <h1>React 3D Slider</h1>
      <Slider {...settings}>
        {images.map((img, idx) => (
     
          <div className={idx === imgIndex ? "slide activeSlide" : "slide"}>
                 
            <img src={img} alt={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;

*/