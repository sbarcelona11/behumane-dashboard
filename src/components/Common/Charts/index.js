"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Chart = ({ options, series, type }) => {
  const [state, setState] = useState({
    series: [],
  });

  useEffect(() => {
    setState({
      series: series,
    });
  }, [series]);

  return (
    <div className="mb-2">
      <div id="chartThree" className="mx-auto flex justify-center">
        <ReactApexChart
          options={options}
          series={state.series}
          type={type}
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Chart;
