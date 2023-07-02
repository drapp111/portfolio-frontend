import React, { Component } from "react";

export default class PerformanceCard extends Component{
    
    render () {
        const {...props} = this.props;
        return (
                <div className="card">
                    <div className="card content-container">
                        <div className="content">
                            <div className="dates">
                                {props.dates}
                            </div>
                            <div className="title">
                                {props.title}
                                <div className="subtitle">
                                    {props.subtitle}
                                </div>
                            </div>
                            
                            <div className="summary">
                                {props.summary}
                            </div>
                            <button className="button">
                                {props.button_text}
                            </button>
                        </div>
                        
                    </div>
                </div>
        )
    }

}