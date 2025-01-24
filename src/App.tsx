import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import './index.css';
import Homepage from "@/pages/homepage";
import Product from "./component/products";
import Login from "./pages/login";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage/>
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Product/>
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Login/>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
