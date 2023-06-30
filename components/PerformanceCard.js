import React, { Component } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default class PerformanceCard extends Component{
    
    render () {
        const {...props} = this.props;
        return (
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
        )
    }

}