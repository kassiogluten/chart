import Chart from "react-apexcharts";

const series = [
  {
    name: "Total",
    data: [
      9000,
      7500,
      6200,
      12000,
      8750,
      13000,
      7500,
      5500,
      9000,
      7500,
      null,
      null,
    ],
  },
  {
    name: "Investment",
    data: [
      8000,
      7000,
      4000,
      9000,
      8000,
      8000,
      7000,
      4000,
      8000,
      7000,
      null,
      null,
    ],
  },
  {
    name: "Profit",
    data: [1000, 500, 1200, 3000, 5750, 5000, 500, 1500, 1000, 500, null, null],
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
    showForNullSeries: true,
  },
  tooltip: {
    shared: true,
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      const value = series[seriesIndex][dataPointIndex];
      const valueFormated = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
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
  colors: ["#2B5EDE", "#828489", "#2BCFC5"],
  stroke: {
    curve: "straight",
    // curve: "smooth straight",
    width: 2,
    lineCap: "square",
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
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      formatter: function (value: number) {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value);
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 1,
    type: "gradient",
    gradient: {
      shade: "light",
      opacityFrom: [0.7, 0, 0.7],
      opacityTo: 0,
    },
  },
  markers: {
    hover: {
      size: 3,
    },
  },
};
export function Home() {
  return <Chart options={options} series={series} type="area" width={800} />;
}
