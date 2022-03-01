import React, { Component } from "react";

export default class ButtonCity extends Component {
    render() {
        const { cityName, nextSlide } = this.props;
        if (nextSlide) {
            return (
                <div className="c-button c-button__next">
                    <div>{
                        cityName}
                    </div>
                    <div>
                        <img className="c-button__icon-next" src={require("../../assets/icons/icon-arrow-next.svg").default} alt="forecast icon" />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="c-button c-button__preview">
                    <div className="">
                        <img className="c-button c-button__icon-preview" src={require("../../assets/icons/icon-arrow-preview.svg").default} alt="forecast icon" />
                    </div>
                    <div>
                        {cityName}
                    </div>
                </div>
            );
        }
    }
}