import React, { Component } from "react";
import Slides from "./Slides";

export default class Slider extends Component{
    render(){
        const { currentTime, currentDate } = this.props;
        return(
            <div className="c-slider__container">
                <div className="c-slider__current-date">
                    {currentTime} - {currentDate}
                </div>
                <div className="c-slider-pagination__container">
                    <Slides isActive={false}/>
                    <Slides isActive={true}/>
                    <Slides isActive={false}/>
                    <Slides isActive={false}/>
                    <Slides isActive={false}/>
                    <Slides isActive={false}/>
                </div>
            </div>
        )
    }
}