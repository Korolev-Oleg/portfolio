import logo from './logo.svg';
import './App.css';
import SectionWeb from "./components/SectionWeb/SectionWeb";
import SectionSoftware from "./components/SectionSoftware/SectionSoftware";

function App() {
  return (
    <div className="App">
      <SectionWeb />
      <SectionSoftware />
    </div>
  );
}

export default App;
