import "./styles.css";
import Navbar from "./Components/Navbar/indes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import BlogDetail from "./Components/BlogDetails/BlogDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/blog" exact Component={Blog}></Route>
          <Route path="/blogDetail" exact Component={BlogDetail}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
