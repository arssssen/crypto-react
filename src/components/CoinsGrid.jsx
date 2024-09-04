import React from "react";
import { Avatar, Card, Col, Row } from "antd";
import millify from "millify";
import { useGetCoinsQuery } from "../services/cryptoApi";
const CoinsGrid = ({ limited }) => {
  const limit = limited ? 12 : 48;
  const { data } = useGetCoinsQuery(limit);
  const coins = data?.data?.coins || [];

  console.log(data);
  return (
    <Row gutter={[24, 24]}>
      {
        coins.map((el) => (
          <Col xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              bordered={false}
              title={`${el?.rank}. ${el?.name}`}
              extra={<Avatar src={el?.iconUrl} />}
              className="cryptocard"
            >
              <p>Price: {millify(el?.price)}</p>
              <p>MarketCap: {millify(el?.marketCap)}</p>
              <p>Daily Change: {millify(el?.change)}</p>
            </Card>
          </Col>
        ))

        // <Col lg={6} md={6} sm={12}> <Cryptocard change={el.change} marketCap={el.marketCap} price={el.price} key={el.id} iconUrl={el.iconUrl} rank={el.rank} coinName={el.name} /> </Col>
      }
    </Row>
  );
};

export default CoinsGrid;
