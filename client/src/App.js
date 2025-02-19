import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';


const App = () => {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
         </Routes>
      </Router>
   );
};

export default App;
