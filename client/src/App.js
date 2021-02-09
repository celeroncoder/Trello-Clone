import './css/main.css';
import Header1 from "./components/trello__options";
import Header2 from "./components/board__options";
import Board from "./components/board";

function App() {
  return (
    <div className="app">
      {/* Header 1 trello options */}
      <Header1 />
      {/* Header 2 board options */}
      <Header2 />
      {/* Board Body */}
      <Board />
      {/* Cards in Board Body */}
    </div>
  );
}

export default App;
