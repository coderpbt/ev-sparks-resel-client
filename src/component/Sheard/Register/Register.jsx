import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';
import useToken from '../../../hooks/useToken';
import { useEffect } from 'react';



const Register = () => {
  const {createUser, updateProfileName,loading} = useContext(AuthContext)

  const [createUserEmil, setCreateUserEmil] = useState("")
  // const [refresh, setRefresh] = useState(true)
  const [token] = useToken(createUserEmil)
  const navigate = useNavigate();

  // Navigate when token is received
  useEffect(() => {
    if (token) {
      console.log('Token received, navigating to home');
      navigate("/");
    }
  }, [token, navigate]);



  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;

    console.log(email, password,name,photoURL,role)

    createUser(email,password)
    .then((result) => {
      const user = result.user;
      handleUpdateNameProfile(name, photoURL)
      saveUser(name, email, role)
      console.log(user)
      form.reset();
      toast.success('Registion SuccesFull')
    })
    .catch((error) => {
      console.error(error)
      const errorMessage = error.message
      toast.warning(`${errorMessage}`)
    })


  }

  const handleUpdateNameProfile = (name, photoURL) => {
    const profile = {
      displayName : name,
      photoURL : photoURL
    }
    updateProfileName(profile)
    .then(() => {
     
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const saveUser = (name, email, role) =>{
    const user ={name, email, role};
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      setCreateUserEmil(email)
    })
}

  if (loading) {
    return <div className='text-black text-center'><img className='w-[300px] mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" /></div>
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
                <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered text-black" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photoURL' placeholder="Enter photo URL" className="input input-bordered text-black" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter Email" className="input input-bordered text-black" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Your Account Options</span>
                </label>
                <select className="input input-bordered text-black" name="role" id="">
                  <option value='buyer'>Buyer</option>
                  <option value='seller'>Seller</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Enter Password" className="input input-bordered text-black" />
                <label className="label">
                  <small className='text-black' >Already a member? <Link to='/login' className="label-text-alt font-bold link link-hover">LogIn</Link></small>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;