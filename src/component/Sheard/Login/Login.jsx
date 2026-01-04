import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';
import useToken from '../../../hooks/useToken';

const Login = () => {
  const { signInwithG, sigIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);

  const from = location.state?.from?.pathname || '/';

  // Navigate only when token is available - use useEffect
  useEffect(() => {
    if (token) {
      console.log('Token received, navigating to:', from);
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    sigIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log('User logged in:', user.email);
        form.reset();
        setLoginUserEmail(email); // This triggers useToken hook
        toast.success('Login Successful');
      })
      .catch((error) => {
        console.error(error);
        toast.warning(`Email address or password doesn't match`);
      });
  };

  const handleGoogleSub = () => {
    signInwithG()
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const name = user.displayName;
        console.log('Google login:', user.email);
        
        // Save user and get token
        saveUser(name, email);
        setLoginUserEmail(email); // This triggers useToken hook
        toast.success('Login Successful');
      })
      .catch((error) => {
        console.error(error);
        toast.warning('Google login failed');
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('User saved:', data);
      })
      .catch(error => {
        console.error('Save user error:', error);
      });
  };

  if (loading) {
    return (
      <div className='text-black text-center'>
        <img className='w-[300px] mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
      </div>
    );
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content lg:w-[75%] flex-col w-[90%]">        
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-white">Login now</h1>
        </div>

        <div className="card w-full max-w-sm shadow-2xl bg-neutral-focus">
          <div className="card-body">

            <form onSubmit={handleOnSubmit}>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input input-bordered bg-neutral text-white border-gray-600 placeholder-gray-400"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text text-gray-300">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="input input-bordered bg-neutral text-white border-gray-600 placeholder-gray-400"
                  required
                />
                <label className="label">
                  <small className="text-gray-400">
                    Not a member yet?{" "}
                    <Link
                      to="/register"
                      className="font-bold text-white link-hover"
                    >
                      Register
                    </Link>
                  </small>
                </label>
              </div>

              {/* Login Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">
                  Login
                </button>
              </div>
            </form>

            {/* Google Login */}
            <div className="flex justify-center mt-4">
              <button
                onClick={handleGoogleSub}
                className="btn btn-outline text-[12px] text-white"
              >
                <FaGoogle className="mr-2 text-white" /> Login with Google
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;