import "./styles.css";
import Navbar from "./Components/Navbar/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import BlogDetail from "./Components/BlogDetails/BlogDetail";
import Portifolio from "./Components/Portifolio/Portifolio";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/blog" exact Component={Blog}></Route>
          <Route path="/blogDetail" exact Component={BlogDetail}></Route>
          <Route path="/about" exact Component={About}></Route>
          <Route path="/portifolio" exact Component={Portifolio}></Route>
          <Route path="/profile" exact Component={Profile}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
