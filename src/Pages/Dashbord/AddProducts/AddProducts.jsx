import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../component/Sheard/Loading/Loading';



const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const date = new Date().toLocaleTimeString()
    const navigate = useNavigate();
    
    // const imageHostKey = process.env.REACT_APP_IMAGEBB_KEY
    // console.log(imageHostKey);
    
    const { data: productSpecialty, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-coderpbt.vercel.app/productSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
       const image = data.image[0];
       const formData = new FormData();
       formData.append('image', image)
       const url = `https://api.imgbb.com/1/upload?key=e64683542c7584cfb50e38f7e68acac3`

       fetch(url,{
        method: 'POST',
        body : formData
       })
       .then(res => res.json())
       .then(imgData => {
        if (imgData.success) {
            console.log(imgData.data.url);
            const product = {
                image: imgData.data.url,
                productName: data.name, 
                location: data.location, 
                reselPrice: data.reprice, 
                originPrice: data.orgprice, 
                useOfYear: data.usesofyr,
                productCondition: data.pcondition,
                category_id : data.specialty,
                email: data.email,
                yourName: data.yname,
                productDiscription: data.description,
                phone: data.phon,
                date
               
            }

            // save doctor information to the database
            fetch('https://b612-used-products-resale-server-side-coderpbt.vercel.app/productswise', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json', 
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result);
                toast.success(`${data.name} is added successfully`);
                navigate('/myproduct')
            })
        }
       })
    }

    if(isLoading){
        return <Loading />
    }

    /*
    picture,name,location,resale price,orginal price,Year of use, time, condition(excellent, good, fair), product category,description,mobile number, seller name

    redirected to the My Products Page.
    */

    return (
        <div className='p-7'>
            <h2 className="text-4xl mb-5">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
             <div className='grid lg:grid-cols-2 grid-cols-1 justify-between gap-8'>
               <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resel Price</span></label>
                    <input type="text" {...register("reprice", {
                        required: "resel price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.reprice && <p className='text-red-500'>{errors.reprice.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Orginal price</span></label>
                    <input type="text" {...register("orgprice", {
                        required: "Orginal price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.orgprice && <p className='text-red-500'>{errors.orgprice.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years Of Use</span></label>
                    <input type="text" {...register("usesofyr", {
                        required: "Year of use is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.usesofyr && <p className='text-red-500'>{errors.usesofyr.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Conditions</span></label>
                    <select
                     {...register("pcondition")}
                     className="select input-bordered w-full max-w-xs"
                     >
                        <option value="excellent">excellent</option>
                        <option value="good">good</option>
                        <option value="fair">fair</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product category</span></label>
                    <select 
                    {...register('specialty')}
                    className="select input-bordered w-full max-w-xs">
                        {
                            productSpecialty.map(specialty => <option
                                key={specialty._id}
                                value={specialty._id}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Name</span></label>
                    <input type="text" {...register("yname", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.yname && <p className='text-red-500'>{errors.yname.message}</p>}
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product description</span></label>
                    <input type="text" {...register("description", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Your Phone</span></label>
                    <input type="text" {...register("phone", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                </div>


                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />

                </div>
            </form>
        </div>
    );
};


export default AddProducts;