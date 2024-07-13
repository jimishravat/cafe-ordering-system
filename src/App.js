import logo from './logo.svg';
import './App.css';
import * as CONSTANT from "./constant"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {CONSTANT.BACKEND_URL}
        </p>
        
      </header>
    </div>
  );
}

export default App;
