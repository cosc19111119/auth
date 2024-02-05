import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Checklogin } from '../helpers'
import { MyContext } from '../MyContext';         
function CheckLogin(props) {                    

    const navigator = useNavigate();
    const {isLogin}=useContext(MyContext)


    useEffect(()=>{
        if(isLogin===false){
          navigator("/login")
        }
      },[])

      if(isLogin===true){
        return (
            <>{props.children}</>
          )
        }
      }
  

export default CheckLogin