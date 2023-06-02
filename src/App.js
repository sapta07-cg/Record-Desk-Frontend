import "./App.css";
import File from "./File";
import Counter from "./features/counter/counter";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Record Desk</h1>
      <Counter />
      <File />
    </div>
  );
}

export default App;
