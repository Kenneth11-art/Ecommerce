import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import './index.css';
import HomePage from "./pages/HomePage";
import Products from "./component/products";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Products/>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
