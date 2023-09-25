
import Login from './Pages/Login';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
// import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Abouta from './Components/About/Abouta';
import { Landing } from './Components/Landing page/landing';
import PrivacyPolicy from './Components/Privacy/PrivacyPolicy';
import Contactus from './Components/Contactus/Contactus';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='/about' element={<Abouta/>}/>
          <Route  path='/privacy' element={<PrivacyPolicy/>}/>
          <Route  path='/faq' element={<Contactus/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
