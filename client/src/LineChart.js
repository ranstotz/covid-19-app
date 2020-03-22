import React, { useState, useEffect } from 'react';
import './Chart1.css';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
  const [mydata, setChartData] = useState([]);
  const hardcodedLabels = [
    '1/21/2020',
    '1/22/2020',
    '1/23/2020',
    '1/24/2020',
    '1/25/2020',
    '1/26/2020',
    '1/27/2020',
    '1/28/2020',
    '1/29/2020',
    '1/30/2020',
    '1/31/2020',
    '2/1/2020',
    '2/2/2020',
    '2/3/2020',
    '2/4/2020',
    '2/5/2020',
    '2/6/2020',
    '2/7/2020',
    '2/8/2020',
    '2/9/2020',
    '2/10/2020',
    '2/11/2020',
    '2/12/2020',
    '2/13/2020',
    '2/14/2020',
    '2/15/2020',
    '2/16/2020',
    '2/17/2020',
    '2/18f/2020',
    '2/19/2020',
    '2/20/2020',
    '2/21/2020',
    '2/22/2020',
    '2/23/2020',
    '2/24/2020',
    '2/25/2020',
    '2/26/2020',
    '2/27/2020',
    '2/28/2020',
    '2/29/2020',
    '3/1/2020',
    '3/2/2020',
    '3/3/2020',
    '3/4/2020',
    '3/5/2020'
  ];

  const hardcodedData = [
    282,
    314,
    581,
    846,
    1320,
    2014,
    2798,
    4593,
    6065,
    7818,
    9826,
    11953,
    14557,
    17391,
    20630,
    24554,
    28276,
    31481,
    34886,
    37558,
    40554,
    43103,
    45171,
    46997,
    49053,
    50580,
    51857,
    71429,
    73332,
    75204,
    75748,
    76769,
    77794,
    78811,
    79331,
    80239,
    81109,
    82294,
    83652,
    85403,
    87137,
    88948,
    90870,
    93091,
    95324
  ];

  const data1 = {
    labels: hardcodedLabels,
    datasets: [
      {
        label: props.name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: hardcodedData
      }
    ]
  };

  useEffect(() => {
    console.log('fetching...');
    fetch('/api/items')
      .then(response => response.json())
      .then(data => {
        console.log('data: ', data);
        setChartData(data);
      });
  }, []);

  return (
    <div>
      <p>item data: {mydata.title}</p>
      <div className="chart-css">
        <h2>{props.name}</h2>
        <Line data={data1} />
      </div>
    </div>
  );
}

export default LineChart;
