import React from 'react'
import axios from 'axios'
import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';



function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();
  const {isLogin,setIsLogin}= useContext(MyContext);

const onsubmit=()=>{
  if(email!==""&&password!==""){
  axios.post("http://localhost:4002/login", {
    email: email,
    password: password

  }).then((res)=>{
    console.log(res.data)
    if(res.data.status=="success"){

      navigator("/dashboard")
      localStorage.setItem('token',res.data.token);
      setIsLogin(true);

    }else{
      alert("invalid input")
    }

  })
}else{alert('feild is empity')}

}

  return (

    <section className="vh-100" >
      <div className="container py-5 p-2 " >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" , backgroundColor: "white" ,    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"    }}>
              <div className="row g-1">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body text-black">
                    <form  onsubmit={e => e.preventDefault()}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">Login</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          placeholder="name@example.com"
                          onChange={e => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          placeholder="password"
                          onChange={e => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button onClick={onsubmit}
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="/signup" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}

export default Login