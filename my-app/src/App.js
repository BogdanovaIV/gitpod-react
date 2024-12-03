import logo from './logo.svg';
import './App.css';
import FunctionalGreedingWithProps from './components/FunctionalGreedingWithProps';
import StatefulGreeding from './components/StatefulGreeding';


function App() {
  return (
    <div className="App">
      <FunctionalGreedingWithProps greeding = "nice to meet you!" name = "Mike" age = "32"/>
      <StatefulGreeding greeding = "from the stateful class component!" name = "Mike" age = "32"/>
    </div>
  );
}

export default App;
