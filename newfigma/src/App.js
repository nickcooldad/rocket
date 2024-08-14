import {ProgressBar} from './components/progressBar.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
     <ProgressBar thresholds={[100,200,300,400]}/>
    </div>
  );
}

export default App;
