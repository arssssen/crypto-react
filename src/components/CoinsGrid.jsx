import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Input, Row } from "antd";
import millify from "millify";
import { useGetCoinsQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
const CoinsGrid = ({ limited }) => {
  const limit = limited ? 12 : 48;
  const { data } = useGetCoinsQuery(limit);
  const [searchTerm, setSearchTerm] = useState("");
  const coins = data?.data?.coins || [];

  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const filteredCoins = coins?.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm);
    });
    setCryptos(filteredCoins?.length > 0 ? filteredCoins : coins);
    console.log(filteredCoins);
  }, [coins, searchTerm]);
  console.log(data);

  return (
    <div>
      {!limited && (
        <Row
          style={{
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Col span={6}>
            <Input
              placeholder="Search Crypto"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </Col>
        </Row>
      )}
      <Row gutter={[24, 24]}>
        {
          cryptos.map((el) => (
            <Col xl={6} lg={8} md={12} sm={12} xs={24} key={el?.uuid}>
              <Link to={`/crypto/${el?.uuid}`}>
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
              </Link>
            </Col>
          ))

          // <Col lg={6} md={6} sm={12}> <Cryptocard change={el.change} marketCap={el.marketCap} price={el.price} key={el.id} iconUrl={el.iconUrl} rank={el.rank} coinName={el.name} /> </Col>
        }
      </Row>
    </div>
  );
};

export default CoinsGrid;
