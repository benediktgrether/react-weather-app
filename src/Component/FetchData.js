import React, { Component } from "react";
import ForecastToday from './ForecastToday';
import ForecastOverview from "./ForecastOverview";
import Header from "./Header";
import Slider from "./Today/Slider";

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {
            }
        }
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=2661604&appid=f670b7f5546d15402e816704fcf775b2&units=metric')
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    timeConverter(UNIX_timestamp, showAdditionalInformation) {
        const currentTime = new Date(UNIX_timestamp * 1000);
        const year = currentTime.getFullYear();
        const date = currentTime.getDate();
        const day = currentTime.toLocaleString("default", { weekday: "long" });
        let month;
        let time;

        if (showAdditionalInformation === true) {
            month = currentTime.toLocaleString('default', { month: 'long' })
            time = day + " " + date + " " + month + " " + year;
        }
        else {
            month = currentTime.toLocaleString('default', { month: 'short' })
            time = date + " " + month + " " + year;
        }
        // label.push(time)
        return time;
    }

    currentTime(){
        const time = new Date();
        const currentTime = time.getHours() + ":" + time.getMinutes()
        return currentTime
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            let forecastTimeToday = this.timeConverter(items.list[0].dt, true)
            let forecastTimeOverview = this.timeConverter(items.list[2].dt, false)
            return (
                <>
                    <Header />
                    <div className="o-forecast">
                        <div className="c-forecast__left-container">
                            <ForecastToday city={items.city} forecastToday={items.list[0]} />
                            <Slider currentTime={this.currentTime()} currentDate={forecastTimeToday} />
                        </div>
                        <ForecastOverview forecastOverviewTime={forecastTimeOverview} />
                    </div>
                </>
            );
        }
    }
}