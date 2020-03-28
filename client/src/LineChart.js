import React, { useState, useEffect } from 'react';
import './Chart1.css';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
  const [allData, setAllData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const state_array = ['Pennsylvania', 'New Jersey', 'New York', 'California'];

  const options = {
    legend: {
      labels: {
        fontColor: 'orange'
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: 'white'
          },
          gridLines: {
            color: 'grey'
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: 'white'
          },
          gridLines: {
            color: 'grey'
          }
        }
      ]
    }
  };

  const data2 = (chartLabels, chartData) => {
    return {
      labels: chartLabels,
      datasets: [
        {
          label: 'Total Coronavirus Cases',
          fill: false,
          lineTension: 0.1,
          // backgroundColor: 'rgba(75,192,192,0.4)',
          backgroundColor: 'rgba(255, 165, 0, 1)',
          // borderColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(255, 165, 0, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(192,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(192,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: chartData
        }
      ]
    };
  };

  useEffect(() => {
    console.log('fetching...');
    fetch('/api/state-data')
      .then(response => response.json())
      .then(data => {
        console.log('data: ', data);

        let allxdata = [];
        let allydata = [];

        let tmpxdata = [];
        let tmpydata = [];

        for (const state of state_array) {
          console.log(state);
          let state_data = data[state].data;
          let tmpxdata = [];
          let tmpydata = [];
          for (const item of state_data) {
            tmpxdata.push(item[0]);
            tmpydata.push(item[3]);
          }
          allxdata.push(tmpxdata);
          allydata.push(tmpydata);
        }

        const allthedata = allxdata.map((e, i) => {
          return [e, allydata[i]];
        });
        setAllData(allthedata);
        setIsLoaded(true);
      });
  }, []);

  return (
    <div>
      <div className="chart-css">
        <h1>Coronavirus Dashboard</h1>

        {isLoaded && allData ? (
          allData.map((item, index) => (
            <>
              <h2>{state_array[index]}</h2>
              <Line data={data2(item[0], item[1])} options={options}></Line>
            </>
          ))
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}

export default LineChart;
