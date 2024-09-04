import { Col } from "antd";
import Avatar from "antd/es/avatar/avatar";
import Card from "antd/es/card/Card";
import millify from "millify";
import React from "react";
const Cryptocard = (props) => {
  return (
    <div>
        {/* <Card
          bordered={false}
          style={{
            width:300,
          }}
          title={`${props?.rank}. ${props?.coinName}`}
          extra={<Avatar src={props?.iconUrl} />}
          className="cryptocard"
        >
          <p>
            Price {millify(props?.price)}
          </p>
          <p>
            MarketCap {millify(props?.marketCap)}
          </p>
          <p>
            Daily Change {millify(props?.change)}
          </p>
        </Card> */}

    </div>
  );
};

export default Cryptocard;
