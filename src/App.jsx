import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navi from './componants/Navi';
import WelcomeScreen from './pages/WelcomeScreen'
import { AccountBox } from "./componants/accountBox";



function App() {
  return (
    
    <Router>

     <Navi/>
      
      <Routes>
      
      <Route  exact path='/' element={ <WelcomeScreen/>} />
      <Route path='/Signing' element={<AccountBox/> }/>

    </Routes>

      

    </Router>

  );
}

export default App;
