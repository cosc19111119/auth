import React, { useEffect,useState } from 'react'
import { Outlet } from 'react-router-dom'
import Models from '../components/Models';


function Dashboard() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(null);



  
  return (
    
    
    <div>
        Dashboard
        <Outlet />
        <button onClick={ () => {
            setIsOpen(true);
            setIsOpenForm("firtButtom");
        } }>Login</button>

        <button onClick={ () => {
            setIsOpen(true);
            setIsOpenForm("seconbotton");
        } }>Signup</button>

        {
          (isOpenForm == "firtButtom") ? <Models isOpen={isOpen} setIsOpen={setIsOpen}>Login</Models> : <Models isOpen={isOpen} setIsOpen={setIsOpen}>Signup</Models>
        }
        
        
     
      </div>
    
  )
}

export default Dashboard