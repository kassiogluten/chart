import Chart from "react-apexcharts";

const series = [
  {
    name: "series-1",
    data: [3, 4, 4, 5, 4, 6, 7, 5],
  },
  {
    name: "series-1",
    data: [4, 7, 2, 9, 1, 8, 7, 4],
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
      show: false,
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
  grid: {
    xaxis: {
      padding: {
        left: 10,
      },
    },
  },
  anottations: {},
  xaxis: {
    // type: "datetime"
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
};

export function Chart1() {
  return (
    <div>
      <Chart options={options} series={series} type="area" width={400} />
    </div>
  );
}
