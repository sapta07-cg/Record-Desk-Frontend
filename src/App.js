import "./App.css";
import File from "./File";
import Counter from "./features/counter/counter";
import Demo from "./component/demo";
import AppNavBar from "./common/AppNavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Employee from "./component/Employee";
import Admin from "./Admin";

function App() {
  return (
    <>
      <Router>
        <AppNavBar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/employee" Component={Employee} />
          <Route exact path="/admin" Component={Admin} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
