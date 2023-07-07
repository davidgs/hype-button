import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import hype from '../../assets/hype.png';
import './App.css';

function Hello() {
  // publish mqtt message
  const hypeMe = () => {
    window.electronAPI
      .sendHype()
      // eslint-disable-next-line promise/always-return
      .then((response: string) => {
        console.log(response);
      })
      .catch((error: string) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="circle">
        <button type="button" onClick={hypeMe}>
          <img width="550" alt="button" src={hype} />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
