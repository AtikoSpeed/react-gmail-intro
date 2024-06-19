import "./styles/App.css";

import MainHeader from "./MainHeader";
import LeftNav from "./LeftNav";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="app">
      <MainHeader />
      <LeftNav />
      <MainContent />
    </div>
  );
}

export default App;
