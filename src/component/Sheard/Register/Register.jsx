import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';
import useToken from '../../../hooks/useToken';
import Loading from '../Loading/Loading';

const Register = () => {
  const { createUser, updateProfileName, loading } = useContext(AuthContext);
  const [createUserEmail, setCreateUserEmail] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();

  // Navigate when token is received
  useEffect(() => {
    if (token && !isRegistering) {
      console.log('Token received, navigating to home');
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    }
  }, [token, navigate, isRegistering]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;

    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    setPasswordError('');
    setIsRegistering(true);

    console.log(email, password, name, photoURL, role);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log('User created:', user);
        
        return handleUpdateNameProfile(name, photoURL)
          .then(() => {
            console.log('Profile updated successfully');
            return saveUser(name, email, role);
          });
      })
      .then(() => {
        console.log('Registration flow completed');
        form.reset();
        toast.success('Registration Successful');
        setIsRegistering(false);
      })
      .catch((error) => {
        console.error('Registration error:', error);
        const errorMessage = error.message;
        toast.warning(`${errorMessage}`);
        setIsRegistering(false);
      });
  };

  const handleUpdateNameProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    };
    
    return updateProfileName(profile)
      .then(() => {
        console.log('Profile name updated');
      })
      .catch((error) => {
        console.error('Profile update error:', error);
        throw error;
      });
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    
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
        setCreateUserEmail(email);
        return data;
      })
      .catch(error => {
        console.error('Save user error:', error);
        throw error;
      });
  };

  if (loading || isRegistering) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
       <Loading />
      </div>
    );
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-[75%] flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-white font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                  type="text" 
                  name='name' 
                  placeholder="Enter Full Name" 
                  className="input input-bordered text-black" 
                  required 
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input 
                  type="text" 
                  name='photoURL' 
                  placeholder="Enter photo URL" 
                  className="input input-bordered text-black" 
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  name='email' 
                  placeholder="Enter Email" 
                  className="input input-bordered text-black" 
                  required 
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Your Account Options</span>
                </label>
                <select 
                  className="input input-bordered text-black" 
                  name="role" 
                  required
                >
                  <option value='buyer'>Buyer</option>
                  <option value='seller'>Seller</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
                  type="password" 
                  name='password' 
                  placeholder="Enter Password" 
                  className="input input-bordered text-black" 
                  required 
                  onChange={(e) => {
                    const v = e.target.value;
                    if (v.length < 6) setPasswordError('Password must be at least 6 characters long');
                    else setPasswordError('');
                  }}
                />
                {passwordError && <p className="text-red-500 mt-1">{passwordError}</p>}
                <label className="label">
                  <small className='text-black'>
                    Already a member?{' '}
                    <Link to='/login' className="label-text-alt font-bold link link-hover">
                      LogIn
                    </Link>
                  </small>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit" disabled={isRegistering}>
                  {isRegistering ? 'Registering...' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;