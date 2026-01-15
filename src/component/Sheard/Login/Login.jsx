import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';
import useToken from '../../../hooks/useToken';
import Loading from '../Loading/Loading';

const Login = () => {
  const { signInwithG, sigIn, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [token] = useToken(loginUserEmail);

  const from = location.state?.from?.pathname || '/';

  // Navigate only when token is available
  useEffect(() => {
    if (token && !isLoggingIn) {
      console.log('Token received, navigating to:', from);
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 500);
    }
  }, [token, navigate, from, isLoggingIn]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    sigIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log('User logged in:', user.email);
        form.reset();
        setLoginUserEmail(email);
        toast.success('Login Successful');
        setIsLoggingIn(false);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Login error:', error);
        toast.warning(`Email address or password doesn't match`);
        setIsLoggingIn(false);
        setLoading(false)
      });
  };

  const handleGoogleSub = () => {
    setIsLoggingIn(true);
    
    signInwithG()
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const name = user.displayName;
        console.log('Google login:', user.email);
        
        return saveUser(name, email)
          .then(() => {
            setLoginUserEmail(email);
            toast.success('Login Successful');
            setIsLoggingIn(false);
          });
      })
      .catch((error) => {
        console.error('Google login error:', error);
        toast.warning('Google login failed');
        setIsLoggingIn(false);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    
    return fetch('https://reseller-ev.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        console.log('Save user response status:', res.status);
        if (!res.ok) {
          throw new Error(`Failed to save user: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('User saved successfully:', data);
        return data;
      })
      .catch(error => {
        console.error('Save user error:', error);
        throw error;
      });
  };

  if (loading || isLoggingIn) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
          <Loading />
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

              <div className="form-control mt-6">
                <button className="btn btn-primary w-full" type="submit" disabled={isLoggingIn}>
                  {isLoggingIn ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </form>

            <div className="flex justify-center mt-4">
              <button
                onClick={handleGoogleSub}
                className="btn btn-outline text-[12px] text-white"
                type="button"
                disabled={isLoggingIn}
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