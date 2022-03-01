import React, { Component } from "react";
import TemperaturChart from "./TemperaturChart";
import DetailsNavigation from "./DetailsNavigation";
import Weekly from "./Weekly";
import ButtonCity from "./ButtonCity";

export default class DetailsEntry extends Component {
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
        fetch('https://api.openweathermap.org/data/2.5/forecast/daily?id=2661604&appid=f670b7f5546d15402e816704fcf775b2&units=metric')
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
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            const listItems = items.list;
            return (
                <>
                    <div className="c-forecast-overview__navigation">
                        <DetailsNavigation
                            isActive={true}
                            navigationItem={'Temperatur'} />
                        <DetailsNavigation
                            isActive={false}
                            navigationItem={'Regenfall'} />
                        <DetailsNavigation
                            isActive={false}
                            navigationItem={'Wind'} />
                    </div>
                    <div>
                        <TemperaturChart />
                        <div className="c-weekly__container">
                            {Object.entries(listItems).map(([key, item],i) => (
                                <Weekly
                                    key={i}
                                    day={item.dt}
                                    forecastIcon={item.weather[0].main.toLowerCase()}
                                    minTemp={item.temp.min}
                                    maxTemp={item.temp.max} />
                            ))
                        }
                        </div>
                        <div className="c-button__container">
                            <ButtonCity cityName={'Zürich'} nextSlide={false} />
                            <ButtonCity cityName={'Bern'} nextSlide={true} />
                        </div>
                    </div>
                </>
            )
        }
    }
}