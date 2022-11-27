import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';
import useToken from '../../../hooks/useToken';


const Login = () => {
  const {signInwithG,sigIn,loading} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const [loginUserEmaail, setLoginUserEmaail] = useState('')
  const [token] = useToken(loginUserEmaail)

  const from = location.state?.from?.pathname || '/'

  if (token) {
      navigate(from, {replace : true})
  }



  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    sigIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user)
      form.reset()
      setLoginUserEmaail(email)
      toast.success('Login SuccessFul')
     
    })
    .catch((error) => {
      console.error(error)
      toast.warning(`email address or password doesn't match`)
    })

  }


  const handleGoogleSub = () => {
    signInwithG()
    .then((result) => {
      const user = result.user;
      const email = result.user.email;
      const name = result.user.displayName;
      console.log(user,name,email)
      saveUser(name,email)
      navigate(from, {replace: true})
    })
    .catch((error) => {
      console.error(error)
    })
  }


  const saveUser = (name, email) =>{
    const user ={name, email};
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    })
}



  if (loading) {
    return <div className='text-black text-center'><img className='w-[300px] mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" /></div>
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content lg:w-[75%] flex-col w-[90%] ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-white font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Enter Password" className="input input-bordered" />
                <label className="label">
                  <small>Not a member yet? <Link to='/register' className="label-text-alt font-bold link link-hover">Register</Link></small>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className='flex justify-center'>
                <div className="form-control mr-1 mt-6">
                  <button onClick={handleGoogleSub} className="btn btn-primary capitalize text-[12px]"><FaGoogle className='mr-1' /> Login With Google</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;