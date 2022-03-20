import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/loginRegistration/Login/Login';
import Registration from './Pages/loginRegistration/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/doctors" element={<Doctors></Doctors>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/registration" element={<Registration></Registration>} />
          <Route path="/*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
