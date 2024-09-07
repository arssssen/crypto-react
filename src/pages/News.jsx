import React, { useState } from "react";
import { useGetNews, useGetNewsQuery } from "../services/newsApi";
import { Card, Col, Image, Row, Select, Typography } from "antd";
import Loader from "../components/Loader";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;
const News = () => {
  // const [trendType, setTrendType] = useState("");
  const { data, isFetching } = useGetNewsQuery();

  console.log(data);
  // const newsType = [
  //   { value: "MARKET_INDEXES", label: "Market Indexes" },
  //   { value: "MOST_ACTIVE", label: "Most Active" },
  //   { value: "GAINERS", label: "Gainers" },
  //   { value: "LOSERS", label: "Losers" },
  //   { value: "CRYPTO", label: "Crypto" },
  //   { value: "CURRENCIES", label: "Currencies" },
  //   { value: "CLIMATE_LEADERS", label: "Climate Leaders" },
  // ];
  if (isFetching) return <Loader />;

  return (
    <div>
      <Col>
        <Title>News</Title>
      </Col>
      <Col>
        {/* <Select
          defaultValue={"Market Indexes"}
          onChange={setTrendType}
          placeholder="Outlined"
          style={{ width: 100 }}
          options={newsType}
        /> */}
        <Row gutter={[24, 24]}>
          {data?.data.map((news) => (
            <Col xl={4} lg={6} md={8} sm={12} xs={24}>
              <Link to={news?.url}>
                <Card
                  style={{ height: "100%" }}
                  cover={<img src={news?.thumbnail} alt="" />}
                >
                  <Meta
                    title={news?.title}
                    description={news?.description.substring(0, 100) + "..."}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default News;
