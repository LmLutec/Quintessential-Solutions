import logo from './logo.svg';
import './App.css';
import CurrentYrStudentTotal from './components/CurrentYrStudentTotal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            Quintessential Solutions
        </h1>
        <CurrentYrStudentTotal/>
      </header>
    </div>
  );
}

export default App;
