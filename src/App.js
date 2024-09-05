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
  return (
    <div className="app">
      <Layout className="navbar ar">
        <Sider>
          <Navbar />
        </Sider>
      </Layout>

      <Layout className="main">
        <Content>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/crypto-currencies" element={<Cryptocurrencies />} />
            <Route path="/news" element={<News />} />
            <Route path="/crypto/:coindId" element={<CoinDetails />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
