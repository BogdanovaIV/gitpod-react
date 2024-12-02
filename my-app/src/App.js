import logo from './logo.svg';
import './App.css';
import FunctionalGreedingWithProps from './components/FunctionalGreedingWithProps';


function App() {
  return (
    <div className="App">
      <FunctionalGreedingWithProps greeding = "nice to meet you!" name = "Mike" age = "32"/>
    </div>
  );
}

export default App;
