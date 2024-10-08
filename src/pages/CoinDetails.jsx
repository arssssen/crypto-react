import React from "react";
import { useParams } from "react-router-dom";
import { useGetCoinDetailQuery } from "../services/cryptoApi";
import millify from "millify";
import {
  DollarCircleOutlined,
  DollarOutlined,
  NumberOutlined,
  TrophyOutlined,
  LineChartOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Row, Typography } from "antd";
import CoinChart from "../components/CoinChart";
import Loader from "../components/Loader";
const CoinDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCoinDetailQuery(coinId);
  const { Title, Text } = Typography;
  const cryptoDetails = data?.data?.coin;
  const dailyVolume = cryptoDetails?.["24hVolume"];
  console.log(cryptoDetails);

  const coinStats = [
    {
      title: "Price to usd",
      value: `${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Rank",
      value: `${cryptoDetails?.rank && millify(cryptoDetails?.rank)}`,
      icon: <NumberOutlined />,
    },
    {
      title: "24h Volume",
      value: `${
        cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])
      }`,
      icon: <LineChartOutlined />,
    },
    {
      title: "Market Cap",
      value: `${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "ATH",
      value: `${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const coinStatsTwo = [
    {
      title: "Number of markets",
      value: `${
        cryptoDetails?.numberOfMarkets &&
        millify(cryptoDetails?.numberOfMarkets)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Number of Exchanges",
      value: `${
        cryptoDetails?.numberOfExchanges &&
        millify(cryptoDetails?.numberOfExchanges)
      }`,
      icon: <NumberOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckCircleOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <TrophyOutlined />,
    },
  ];
  if (isFetching) return <Loader />;

  console.log(coinStats);
  return (
    <div>
      <Row className="coin-detail-container">
        <Col span={24} className="coin-heading-container">
          <Title className="coin-name">{cryptoDetails?.name}</Title>
          <Text>
            {cryptoDetails?.name} live price in US Dollar (USD). View value
            statistics, market cap and supply
          </Text>
        </Col>
      </Row>

      <Row justify="center">
        <Col span={24}>
          <CoinChart currentPrice={cryptoDetails?.price} />
        </Col>
      </Row>

      <Row style={{ marginTop: "24px" }} justify="space-between">
        <Col className="coin-value-stats">
          <Col span={24} className="coin-value-stats-heading">
            <Title level={2}>{cryptoDetails?.name} Statistic</Title>
            <p>
              An overview demonstrating the stats of {cryptoDetails?.name} such
              as base, price, rank and volume
            </p>
          </Col>

          {coinStats.map(({ title, icon, value }) => (
            <Col span={24} className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Col>
                <Text className="stats">{value}</Text>
              </Col>
            </Col>
          ))}
        </Col>

        <Col className="coin-value-stats">
          <Row>
            <Col className="coin-value-stats-heading">
              <Title level={2}>{cryptoDetails?.name} Statistic</Title>
              <p>
                An overview demonstrating the stats of {cryptoDetails?.name}{" "}
                such as base, price, rank and volume
              </p>
            </Col>
          </Row>

          {coinStatsTwo.map(({ title, icon, value }) => (
            <Row className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Col>
                <Text className="stats">{value}</Text>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default CoinDetails;
