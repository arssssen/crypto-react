import { Link, Route, Routes } from "react-router-dom";
import Cryptocard from "./components/Cryptocard";
import Navbar from "./components/Navbar";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import News from "./pages/News";
import Homepage from "./pages/Homepage";
import CoinDetails from "./pages/CoinDetails";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
function App() {
  const siderStyle = {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarColor: "unset",
  };
  return (
    <Layout
      hasSider
      style={{
        backgroundColor: "#f9f9f9",
      }}
    >
      <Sider style={siderStyle}>
        <Navbar />
      </Sider>

      <Layout
        style={{
          marginInlineStart: 200,
        }}
      >
        <Content
          style={{
            margin: 40,
          }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/crypto-currencies" element={<Cryptocurrencies />} />
            <Route path="/news" element={<News />} />
            <Route path="/crypto/:coinId" element={<CoinDetails />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
