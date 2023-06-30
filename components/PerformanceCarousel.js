

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
  //Progress to next slide
  //Passed into the PerformanceCard component 
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
 
  state = {
    activeSlide: null
  };

  render() {
    const PERFORMANCE_LIST = [
      
      { dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" },
      { dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" }
      ,{ dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" }
      ,{ dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" }

    ];

    const SLIDES_TO_SHOW = (PERFORMANCE_LIST.length <= 3 ? PERFORMANCE_LIST.length : 3);
    const INITIAL_SLIDE = ((PERFORMANCE_LIST.length <= 2 ? 0 : 1))
    const NUMBER_OF_CARDS = PERFORMANCE_LIST.length;
    var active;
    const settings = {
      infinite:true,
      slidesToShow: SLIDES_TO_SHOW,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      centerMode: true,
      initialSlide: INITIAL_SLIDE,
      beforeChange: (current, next) => this.setState({activeSlide: next}),
      onInit: () => this.setState({activeSlide: INITIAL_SLIDE})
    };

    const NextArrow = ({onClick}) => {
      return (
          <div className="arrow next" onClick={this.next}>
              <FaArrowRight />
          </div>
      )
    }
      
    const PrevArrow = ({onClick}) => {
      return (
          <div className="arrow prev" onClick={this.previous}>
              <FaArrowLeft />
          </div>
      )
    }

    return (
      <div className="cards">
        <NextArrow />
        <PrevArrow />
        <Slider className="slider" ref={c => (this.slider = c)} {...settings}>
            {PERFORMANCE_LIST.map((card, idx) => (
                <span className={idx === this.state.activeSlide ? "slide activeSlide" : "slide"} key={card}>
                    <PerformanceCard{...card} />
                </span>
            ))}
        </Slider>
        </div>
    )
  }
}