import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import PerformanceCard from "./PerformanceCard";
import React, { Component } from "react";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
          <FaArrowLeft />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
          <FaArrowRight />
    </div>
  );
}

export default class PerformanceCarousel extends Component {

  state = {
    activeSlide: 1
  };

  render() {
    const PERFORMANCE_LIST = [
      { dates: "June 23, 2023 - July 2nd, 2023", title: "The Color Purple", subtitle: "Presented by BLAAC", summary: "This production has a phenomenal cast and you don’t want to miss this monumental event. You’ll laugh, you’ll cry, you’ll jump to your feet with joy. Come out and enjoy this wonderful event. Opening night is a red carpet event. So put on your best red carpet attire and meet us.", button_text: "Tickets" },
      { dates: "Testing", title: "Test", subtitle: "Test", summary: "Tests.", button_text: "Test" },
      { dates: "Testing", title: "Test", subtitle: "Test", summary: "Tests.", button_text: "Test" }
    ];

    const settings = {
      infinite:true,
      slidesToShow:3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      dots: true,
      beforeChange: (current, next) => this.setState({activeSlide: next}), 
    };
    return (
      <Slider {...settings}>
          {PERFORMANCE_LIST.map((card, idx) => (
              <div className={idx === this.state.activeSlide ? "slide activeSlide" : "slide"} key={card}>
                  <PerformanceCard index={idx}{...card} />
              </div>
          ))}
      </Slider>
    )
  }
}
