
import './App.css';
import { ProgressBar } from './components/progressBar';

function App() {
  return (
    <div className="App">
      <ProgressBar
      thresholds={[25,50, 100, 200, 500, 1000]}
      value={20}/>
    </div>
  );
}

export default App;
