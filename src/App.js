
import './App.css';
import Login from './pages/Login';
import SingnUp from './pages/SingnUp';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Nanbar from './pages/Nanbar';
import Home from './pages/Home';
import Logout from './pages/Logout';
import CheckLogin from './pages/CheckLogin';
import { useState } from 'react';
import { MyContext } from './MyContext';
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
   <div>
<MyContext.Provider value={{isLogin,setIsLogin}}>
    <Nanbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<SingnUp />} />
<Route path='/dashboard' element={<CheckLogin ><Dashboard/></CheckLogin>}>
</Route>
<Route path='/logout' element={<Logout/>}/>

</Routes>
</MyContext.Provider>

   </div>
  );
}

export default App;
