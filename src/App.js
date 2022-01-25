import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pagina <code> Mauricio Salazar</code> en construccion
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/msalazarpa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contacto
        </a>
      </header>
    </div>
  );
}

export default App;
