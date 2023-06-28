import "./App.css";
import File from "./File";
import Counter from "./features/counter/counter";
import Demo from "./component/demo";
import AppNavBar from "./common/AppNavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Employee from "./component/Employee";

function App() {
  return (
    <>
      <Router>
        <AppNavBar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/employee" Component={Employee} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
