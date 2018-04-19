import React from 'react';
import { Doughnut } from 'react-chartjs';

const data = [
  {
    value: 0,
    color: "#eaaebe",
    highlight: "#bb6783 ",
    label: "FAT"
  },
  {
    value: 0,
    color: "#e47453",
    highlight: "#b03224",
    label: "THICC"
  }
];

const chartOptions = {
  animateScale: true,
  animationEasing: "easeOutBounce",
  animateRotate: true,
  animationSteps: 100,
  percentageInnerCutout: 50,
  segmentStrokeWidth: 2,
  segmentStrokeColor: "#fff",
  segmentShowStroke: true,
};

const ThiccGraph = ({ pollData }) => (
  <Doughnut data={pollData || data} options={chartOptions} width="280" height="280" />
);


export default ThiccGraph;
