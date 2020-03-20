import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js';
import './Chart1.css';

function Chart1() {
  // const chartRef = React.createRef();

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('hello');
    // chartjs stuff
    // const myChartRef = chartRef.current.getContext('2d');

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

    // new Chart(myChartRef, {
    //   type: 'line',
    //   data: {
    //     //Bring in data
    //     labels: hardcodedLabels,
    //     datasets: [
    //       {
    //         label: 'Worldwide Cases',
    //         data: hardcodedData
    //       }
    //     ]
    //   },
    //   options: {
    //     //Customize chart options
    //   }
    // });
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {/* <div className="chart-css">
        <canvas id="myChart" ref={chartRef} />
      </div> */}
    </div>
  );
}

export default Chart1;
