import React, { useEffect, useState } from "react";

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
import { Col, Row, Select, Typography } from "antd";
import Loader from "./Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = ({ currentPrice }) => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("3h");

  const { data, isFetching } = useGetCoinPriceHistoryQuery({
    id: coinId,
    timePeriod: timePeriod,
  });
  console.log(data);

  const coinHistory = data?.data?.history;

  const coinHistoryTime = coinHistory
    ?.map((coin) => moment.unix(coin.timestamp).format("DD.MM.YYYY"))
    .reverse();

  const coinHistoryPrice = coinHistory?.map((coin) => coin?.price).reverse();

  const chartData = {
    labels: coinHistoryTime,
    datasets: [
      {
        label: "Price in USD",
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
        display: false,
        text: "Price in USD",
      },
    },
  };
  const timePeriods = [
    { value: "3h", label: "3h" },
    { value: "24h", label: "24h" },
    { value: "7d", label: "7d" },
    { value: "30d", label: "30d" },
    { value: "3m", label: "3 months" },
    { value: "1y", label: "1 year" },
    { value: "2y", label: "2 years" },
    { value: "5y", label: "5 years" },
  ];
  if (isFetching) return <Loader />;

  return (
    <Row className="coin-chart">
      <Col span={18}>
        <Typography.Title level={2}>Chart</Typography.Title>
        <Select
          defaultValue={"24h"}
          onChange={setTimePeriod}
          placeholder="Outlined"
          style={{ width: 100 }}
          options={timePeriods}
        />
      </Col>
      <Col span={6}>
        <Typography.Title level={5}>
          Change: {data?.data?.change}
        </Typography.Title>
        <Typography.Title level={5}>
          Current Price: $ {Math.floor(currentPrice)}
        </Typography.Title>
      </Col>
      <Line data={chartData} options={options} />
    </Row>
  );
};

export default CoinChart;
