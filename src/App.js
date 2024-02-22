import "./App.css";
import Routee from "./route/Routee";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routee />
      </div>
    </Router>
  );
}

export default App;
