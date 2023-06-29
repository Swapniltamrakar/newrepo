import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import EmpList from './component/EmpList';
import EmpAdd from './component/EmpAdd';
import EmpUpdate from './component/EmpUpdate';
function App() {
  return (
   <div>
    {/* to set navigation to pages */}
    <BrowserRouter>
    <Routes>
       {/* First Page */}
      <Route path='/' Component={EmpList} />  
      <Route path='/add' Component={EmpAdd} />
      <Route path='/update/:deptNo' Component={EmpUpdate} />
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
