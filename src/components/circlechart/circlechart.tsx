// searchWorker.js
import CircleChartWorker from "./circlechart.worker";

const CircleChart = typeof window === "object" && CircleChartWorker;

export default CircleChart;
