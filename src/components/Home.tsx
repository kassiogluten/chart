import Chart from "react-apexcharts";

const series = [
  {
    name: "total",
    data: [3000, 4000, 4000, 5000, 4000, 6000, 7000, 5000],
  },
  {
    name: "investment",
    data: [8000, 7000, 2000, 9000, 1000, 8000, 7000, 4000],
  },
];

// const amountValues = [5.0, 10.0, 15.0, 20.0, 25.0, 30.0];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const options = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  tooltip: {
    shared: false,
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      const value = series[seriesIndex][dataPointIndex];
      const valueFormated = new Intl.NumberFormat("USA", {
        style: "currency",
        currency: "USD",
      }).format(value);
      return `
        <div class="arrow_box"> 
          <div class="series_name"> 
            <span> ${w.globals.initialSeries[seriesIndex].name}</span> 
          </div>
          <div class="values"> 
            <span>${valueFormated}</span>
          </div>
          <div class="arrow-down"></div>
        </div>
      `;
    },
  },
  colors: ["#2E23fA", "#6fDAf6", "#546E7A", "#E91E63", "#FF9800"],
  stroke: {
    curve: "straight",
    width: 1,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    fontWeight: "bold",
  },
  xaxis: {
    type: "category",
    categories: months,
  },
  yaxis: {
    labels: {
      formatter: function (value: number) {
        return new Intl.NumberFormat("USA", {
          style: "currency",
          currency: "USD",
        }).format(value);
      },
    },
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opcityTo: 0.3,
    },
  },
  markers: {
    hover: {
      size: 4,
    },
  },
};
export function Home() {
  return <Chart options={options} series={series} type="area" width={400} />;
}
