import React, { Component } from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Line } from 'react-chartjs-2'

// var gradient = ctx.createLinearGradient(0, 0, 0, 400);
// gradient.addColorStop(0, 'rgba(10,10,10,.2)');   
// gradient.addColorStop(1, 'rgba(255,255,255,1)');

const data = {
  labels: ["6:00", "10:00", "12:00", "18:00", "22:00", "0:00"],
  datasets: [
    {
      label: "Temperatur",
      data: [5, 8, 12, 9, 8, 4],
      fill: true,
      cubicInterpolationMode: 'monotone',
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

const options = {
  drawTicks: false,
  plugins: {
    legend: {
      display: false
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      },
      ticks: {
        display: false,
      }
    }
  }
};

export default class TemperaturChart extends Component {
  render() {
    return (
      <div className="c-chart__container">
        <div className="c-chart__title">
          <div className="c-chart__title-wrapper">
            <h3>Basel</h3>
            <div className="c-chart__burger-menu">
              <span className="c-burger__line"></span>
              <span className="c-burger__line"></span>
            </div>
            </div>
          <p>14°C - 30 °C</p>
        </div>
        <Line data={data} options={options} />
      </div>
    )
  }
}