import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Menu from "./Pages/Menu";
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  )
}

export default App;
