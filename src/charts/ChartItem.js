import React from 'react';
import Chart from "react-apexcharts";
import './ChartItem.css';

const ChartItem = ({info}) => {
  return (
    <div className='ChartItem'>
      <Chart
        options={
          info.options
        }
        series={info.series}
        width="600"
        type={info.type}
      ></Chart>
    </div>
  )
}

export default ChartItem