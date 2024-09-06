import React, { useState } from "react";
import { useGetNews, useGetNewsQuery } from "../services/newsApi";
import { Col, Select, Typography } from "antd";
import Loader from "../components/Loader";
const { Title, Text } = Typography;
const News = () => {
  const [trendType, setTrendType] = useState("");
  const { data, isFetching } = useGetNewsQuery(trendType);

  console.log(data);
  const newsType = [
    { value: "MARKET_INDEXES", label: "Market Indexes" },
    { value: "MOST_ACTIVE", label: "Most Active" },
    { value: "GAINERS", label: "Gainers" },
    { value: "LOSERS", label: "Losers" },
    { value: "CRYPTO", label: "Crypto" },
    { value: "CURRENCIES", label: "Currencies" },
    { value: "CLIMATE_LEADERS", label: "Climate Leaders" },
  ];
  if (isFetching) return <Loader />;

  return (
    <div>
      <Col>
        <Title>News</Title>
      </Col>
      <Col>
        <Select
          defaultValue={"Market Indexes"}
          onChange={setTrendType}
          placeholder="Outlined"
          style={{ width: 100 }}
          options={newsType}
        />

        {data.map((news) => (
          <Card>
            <p>news</p>
          </Card>
        ))}
      </Col>
    </div>
  );
};

export default News;
