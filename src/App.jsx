import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Menu from "./Pages/Menu";
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import Shop from "./Pages/Shop";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  )
}

export default App;
