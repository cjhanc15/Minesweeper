import Game from './index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Game/>}/>
      </Routes>
    </Router>
  );
}

export default App;
