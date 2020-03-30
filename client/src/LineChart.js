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
        fontColor: 'white'
      }
    },
    scales: {
      yAxes: [
        {
          position: 'right',
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

  const chartData = (title, chartLabels, chartData) => {
    const backgroundColor =
      title === 'Cases' ? 'rgba(255, 165, 0, 1)' : 'rgba(255, 0, 0, 1)';

    return {
      labels: chartLabels,
      datasets: [
        {
          label: 'Total ' + title,
          fill: false,
          lineTension: 0.1,
          backgroundColor: backgroundColor,
          borderColor: backgroundColor,
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
        let allCases = [];
        let allDeaths = [];

        for (const state of state_array) {
          console.log(state);
          let state_data = data[state].data;
          let tmpxdata = [];
          let tmpCases = [];
          let tmpDeaths = [];
          for (const item of state_data) {
            tmpxdata.push(item[0]);
            tmpCases.push(item[3]);
            tmpDeaths.push(item[4]);
          }
          allxdata.push(tmpxdata);
          allCases.push(tmpCases);
          allDeaths.push(tmpDeaths);
        }

        const allthedata = allxdata.map((e, i) => {
          return [e, allCases[i], allDeaths[i]];
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
              <p>
                Cases: {item[1].slice(-1).toLocaleString()} <br />
                Deaths: {item[2].slice(-1).toLocaleString()}
              </p>
              <Line
                data={chartData('Cases', item[0], item[1])}
                options={options}
              ></Line>
              <Line
                data={chartData('Deaths', item[0], item[2])}
                options={options}
              ></Line>
              <br />
            </>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default LineChart;
