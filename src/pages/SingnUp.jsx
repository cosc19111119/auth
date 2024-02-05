import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function SingnUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");

  const navigator = useNavigate();

  const onsubmit = () => {

    // confirm
if(name!==""&&email!==""&password!==""&&password!==""){
   if(password !== password1) {
      alert("passwords not matched");
      return;
    }

    axios.post("http://localhost:4002/signUp", {
      email: email,
      password: password,
      name: name
    }).then((res) => {
      console.log(res.data)
      if (res.data.status == "success") {
        navigator("/login")
      } else {
        alert('already registerd')
      }
    })


  }else{ alert('felid empity')}
  }






  return (
    <section  >
      <div className="container my-5 p-5 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 ,  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onsubmit={e => e.preventDefault()}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            placeholder='name'
                            onChange={e => setName(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example1c">
                            Your Name
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder='uf71384@gmail.com'
                            onChange={e => setEmail(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder=' password'
                            onChange={e => setPassword(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            placeholder='confirm password'
                            onChange={e => setPassword1(e.target.value)}
                          />
                          <label className="form-label" htmlFor="form3Example4cd">
                            Repeat your password
                          </label>
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                       

                          id="form2Example3c"
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        

                        <button onClick={onsubmit}  type="button" className="btn btn-primary btn-lg">
                        Register
                      </button>





                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div >
    </section >

  );
}

export default SingnUp