import "./App.css"
import SudokuBoard from "./SudokuBoard";
import Numbers from "./Numbers";

function App() {
  return (
    <div className="App">
      <div className="Header">
        Daily Sudoku
      </div>
      <div className="SudokuBoard">
        <SudokuBoard />
      </div>
      <div className="">
        <Numbers />
      </div>
    </div>
  );
}

export default App;
