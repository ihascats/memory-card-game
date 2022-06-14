import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div>
      <GameBoard />
      <footer>
        MADE BY{' '}
        <a
          href="https://github.com/ihascats"
          target="_blank"
          rel="noopener noreferrer"
        >
          IHASCATS
        </a>
      </footer>
    </div>
  );
}

export default App;
