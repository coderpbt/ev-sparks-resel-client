import React from 'react';
import { toast } from 'react-toastify';



const AddServices = () => {

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const image_url = form.photoURL.value;
    const details = form.textarea.value;
    const price = form.price.value;
    console.log(title, image_url,details,price)

    const service = {
      title : title,
      image_url : image_url,
      details : details,
      price : price
    }

    fetch(`https://b6a11-service-review-server-side-coderpbt.vercel.app/services`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Services add successfully')
          form.reset();
        }
      })
      .catch(er => console.error(er));

  }



  return (
    <div className='py-8'>
      <div className='xl:w-[1200px] mx-auto w-[95%]'>
      <div className="hero min-h-screen">
      <div className="hero-content w-[75%] flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-white font-bold">Add A New Service</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea name='textarea' className="textarea textarea-primary" placeholder="Write Review"></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photoURL' placeholder="Enter photo URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" name='price' placeholder="Enter Email" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Service</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default AddServices;