import logo from './logo.svg';
import './App.css';
import News from './components/News';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      
      <div className="weather">
        <Weather />
      </div>
      <div className="news">
        <News></News>
      </div>
    </div>
  );
}

export default App;
