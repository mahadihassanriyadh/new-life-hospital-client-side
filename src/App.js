import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
