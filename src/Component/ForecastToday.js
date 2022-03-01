import React, { Component } from "react";

export default class ForecastToday extends Component {

    render() {
        const { city, forecastToday } = this.props;
        let country;
        if (city.country === 'CH') {
            country = 'Switzerland';
        }
        const forecastIcon = forecastToday.weather[0].main.toLowerCase();
        return (
            <div className="c-forecast-today">
                <div className="c-forecast-today__container">
                    <h1>
                        <span className="c-forecast-today__icon">
                            <img src={require(`../assets/icons/day_${forecastIcon}.svg`)} alt="forecast icon" />
                        </span>
                    {Math.round(forecastToday.main.temp)}°C</h1>
                    <h2>{city.name}</h2>
                    <p className="c-forecast-today__country">{country}</p>
                </div>
            </div>
        );
    }
}