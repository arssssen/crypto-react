import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
const Loader = () => {
  return (
    <div className="loader">
      <Spin indicator={<LoadingOutlined spin />} size="large" />;
    </div>
  );
};

export default Loader;
