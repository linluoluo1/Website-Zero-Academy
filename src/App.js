import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
import Mainpage from './components/Mainpage/Mainpage';
import AllCoourses from './components/CousesPage/AllCoourses';
import Pastrycook from './components/CousesPage/CoursesPages/PastrycookPage/Pastrycook';

function App() {
  return (    
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/main' element={<Mainpage />} />
          <Route path='/courses' element={<AllCoourses />} />
          <Route path='/pastrycook' element={<Pastrycook />} />
        </Routes>        
      </BrowserRouter>
  
  );
}

export default App;
