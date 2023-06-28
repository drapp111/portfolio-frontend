import React, { Component } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default class PerformanceCard extends Component{
    
    render () {
        const {next,previous,active,index, ...props} = this.props;
        const NextArrow = ({onClick}) => {
            return (
                <div className="container arrow next" onClick={next}>
                    <FaArrowRight />
                </div>
            )
        }
            
        const PrevArrow = ({onClick}) => {
            return (
                <div className="container arrow prev" onClick={previous}>
                    <FaArrowLeft />
                </div>
            )
        }
        return (
            <div className="container">
            <div style={active == 1 ? {display: 'flex'} : {display: 'none'}}>
                    <NextArrow />
                    <PrevArrow />
                </div>
                <div className="card">
                    <div className="content">
                        <div className="content dates">
                            {props.dates}
                        </div>
                        <div className="content title">
                            {props.title}
                        </div>
                        <div className="content subtitle">
                            {props.subtitle}
                        </div>
                        <div className="content summary">
                            {props.summary}
                        </div>
                        <button className="content button">
                            {props.button_text}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}