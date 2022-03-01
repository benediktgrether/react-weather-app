import React, { Component } from "react";
import DetailsEntry from "./Details/DetailsEntry";

export default class ForecastOverview extends Component{
    render(){
        const { forecastOverviewTime } = this.props;
        return(
            <div className="c-forecast-overview">
                <div className="c-forecast-overview__title">
                <h2>Regionale Wettervorhersage</h2>
                <p>{forecastOverviewTime}</p>
                </div>
                <DetailsEntry/>
            </div>
        )
    }
}