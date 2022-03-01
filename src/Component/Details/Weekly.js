import React, { Component } from "react";

export default class Weekly extends Component {
    timeConverter(UNIX_timestamp, showAdditionalInformation) {
        const currentTime = new Date(UNIX_timestamp * 1000);
        const day = currentTime.toLocaleString("default", { weekday: "short" });
        return day;
    }

    render() {
        const {day, forecastIcon, minTemp, maxTemp} = this.props;
        let currentDay = this.timeConverter(day);
        return (
            <div className="c-weekly__content">
                <div className="c-weekly__headline">
                    {currentDay}
                </div>
                <div className="c-weekly__icon">
                    <img src={require(`../../assets/icons/day_${forecastIcon}.svg`)} alt="forecast icon" />
                </div>
                <div className="c-weekly__temperature">
                    {Math.round(minTemp)}&middot;{Math.round(maxTemp)}°
                </div>
            </div>
        )
    }
}