import { Link, Route, Routes } from "react-router-dom";
import Cryptocard from "./components/Cryptocard";
import Navbar from "./components/Navbar";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import News from "./pages/News";
import Homepage from "./pages/Homepage";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
function App() {
  const arr =['BTC', 'ETH', 'USDT', 'BNB', 'SOL'] ;
  return (
    <div className="app">

      <Layout className="navbar">
        <Sider>
        <Navbar />

        </Sider>
      </Layout>

      <Layout >
        <Content>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/crypto-currencies' element={<Cryptocurrencies/>} />
          <Route path='/news' element={<News/>} />
        </Routes>
        </Content>
      </Layout>
      {/* <div className="navbar">
      </div> */}
      

      
      
    </div>
  );
}

export default App;
