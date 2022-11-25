import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';



const Register = () => {

  /*
  
Your navbar will have a login button. Implement email/password-based authentication and 
at least one social login(google, Facebook, GitHub, etc.) authentication. Create an extra 
field for options. There will be two options: a radio button, a dropdown, a toggle button, 
etc. If the user creates a seller account, he will choose the seller option. Otherwise, 
a normal user will have the user option selected by default. Users logged in by using 
social media will be considered as buyers.

Note: Do not apply email verification as it will be an inconvenience for the examiner. 
It is important for the examiner to be able to check your authentication without any hassle. 
If you want, you can add email verification after getting the assignment result.

  



If a user(buyer/seller/admin) is logged in, they will see logout (should be working) and another option on the header called Dashboard. The dashboard routes will change based on the users:
Buyers will see: My orders(see bonus requirement 7),
Sellers will see: Add A product (See Requirement 8), My Products(see requirement 9), My buyers(this one is optional).
Admin will see: All Sellers, All Buyers (see requirement 12), Reported Items


On the " Add A Product" route, create a form that will have fields for product name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), product category (every product should be under a category), description, price, Year of purchase and other relevant information. After submitting the form, a modal/toast with a message will pop up to inform the user. Please remember, they must be a seller to add a product (think about the verification process for the admin access). After adding the product, you will then be redirected to the My Products Page.



  */


  const {createUser, updateProfileName,loading} = useContext(AuthContext)
  const navigate = useNavigate();


  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const accopt = form.accopt.value;

    console.log(email, password,name,photoURL,accopt)

    createUser(email,password)
    .then((result) => {
      const user = result.user;
      handleUpdateNameProfile(name, photoURL)
      console.log(user)
      form.reset();
      toast.success('Registion SuccesFull')
      navigate('/login')
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
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
  }

  // const saveUser = (email,password,accopt) => {

  // }

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
                <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photoURL' placeholder="Enter photo URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Your Account Options</span>
                </label>
                <select className="input input-bordered" name="accopt" id="">
                  <option value='buyer'>Buyer</option>
                  <option value='seller'>Seller</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Enter Password" className="input input-bordered" />
                <label className="label">
                  <small>Already a member? <Link to='/login' className="label-text-alt font-bold link link-hover">LogIn</Link></small>
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