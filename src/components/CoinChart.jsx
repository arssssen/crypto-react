import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useGetCoinPriceHistoryQuery } from "../services/cryptoApi";
import moment from "moment";
import { useParams } from "react-router-dom";
import millify from "millify";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const CoinChart = () => {
  const { coinId } = useParams();
  console.log(coinId);

  const data = useGetCoinPriceHistoryQuery({
    id: coinId,
    timePeriod: "7d",
  });
  console.log(data);

  const coinHistory = data?.currentData?.data?.history;
  const coinHistoryTime = coinHistory?.map((coin) =>
    moment.unix(coin.timestamp).format("DD.MM.YYYY")
  );
  console.log(coinHistoryTime);

  const coinHistoryPrice = coinHistory?.map((coin) => coin?.price);
  console.log(coinHistoryPrice);
  const chartData = {
    labels: coinHistoryTime,
    datasets: [
      {
        label: "Sales",
        data: coinHistoryPrice,
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default CoinChart;
