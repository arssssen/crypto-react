import React, { useEffect, useState } from "react";
import CoinsGrid from "../components/CoinsGrid";
import { Button, Col, Row, Statistic, Typography } from "antd";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Typography.Title>Global Crypto Stats</Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total" value="20000" />
        </Col>
        <Col span={12}>
          <Statistic title="Total exchanges" value="20000" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="20000" />
        </Col>
        <Col span={12}>
          <Statistic title="Total" value="20000" />
        </Col>
        <Col span={12}>
          <Statistic title="Total" value="20000" />
        </Col>
        <Col span={12}>
          <Statistic title="Total" value="20000" />
        </Col>
      </Row>
      <div className="crypto-top-heading-container">
        <Typography.Title level={2}>Top 12 Cryptos</Typography.Title>
        <Typography.Title level={3}>
          <Link to="/crypto-currencies">Show more</Link>
        </Typography.Title>
      </div>
      <CoinsGrid limited />
    </div>
  );
};

export default Homepage;
