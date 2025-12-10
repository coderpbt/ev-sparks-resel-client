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

    const { data: productSpecialty, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productSpecialty');
            return res.json();
        }
    });

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=e64683542c7584cfb50e38f7e68acac3`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if (imgData.success) {
                const product = {
                    image: imgData.data.url,
                    productName: data.name,
                    location: data.location,
                    reselPrice: data.reprice,
                    originPrice: data.orgprice,
                    useOfYear: data.usesofyr,
                    productCondition: data.pcondition,
                    category_id: data.specialty,
                    email: data.email,
                    yourName: data.yname,
                    productDiscription: data.description,
                    phone: data.phone,
                    date
                };

                fetch('http://localhost:5000/productswise', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result => {
                    toast.success(`${data.name} added successfully`);
                    navigate('/myproduct');
                });
            }
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="p-9 bg-[#0f0f0f] text-gray-200"> 
            <h2 className="text-4xl font-bold mb-8 text-gray-100">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">

                    {/* Common class for all form items */}
                    {/** Grouped styling for Dark Theme */}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-300">Product Image</span>
                        </label>
                        <input 
                            type="file"
                            {...register("image", { required: "Photo is required" })}
                            className="file-input file-input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.image && <p className="text-red-400 text-sm">{errors.image.message}</p>}
                    </div>

                    {/* PRODUCT NAME */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Product Name</span></label>
                        <input 
                            type="text"
                            {...register("name", { required: "Name is Required" })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200 focus:border-blue-500"
                        />
                        {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* LOCATION */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Location</span></label>
                        <input 
                            type="text"
                            {...register("location", { required: "Location is Required" })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.location && <p className="text-red-400 text-sm">{errors.location.message}</p>}
                    </div>

                    {/* RESELL PRICE */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Resell Price</span></label>
                        <input 
                            type="text"
                            {...register("reprice", { required: "Resell price is Required" })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.reprice && <p className="text-red-400 text-sm">{errors.reprice.message}</p>}
                    </div>

                    {/* ORIGINAL PRICE */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Original Price</span></label>
                        <input 
                            type="text"
                            {...register("orgprice", { required: "Original price is Required" })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.orgprice && <p className="text-red-400 text-sm">{errors.orgprice.message}</p>}
                    </div>

                    {/* YEARS OF USE */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Years Of Use</span></label>
                        <input 
                            type="text"
                            {...register("usesofyr", { required: "Years of use is Required" })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.usesofyr && <p className="text-red-400 text-sm">{errors.usesofyr.message}</p>}
                    </div>

                    {/* PRODUCT CONDITION */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Product Condition</span></label>
                        <select 
                            {...register("pcondition")}
                            className="select select-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        >
                            <option value="excellent">excellent</option>
                            <option value="good">good</option>
                            <option value="fair">fair</option>
                        </select>
                    </div>

                    {/* CATEGORY */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Product Category</span></label>
                        <select 
                            {...register('specialty')}
                            className="select select-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        >
                            {productSpecialty.map(s => (
                                <option key={s._id} value={s._id}>{s.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* EMAIL */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Your Email</span></label>
                        <input 
                            type="email"
                            {...register("email", { required: true })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* YOUR NAME */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Your Name</span></label>
                        <input 
                            type="text"
                            {...register("yname", { required: true })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.yname && <p className="text-red-400 text-sm">{errors.yname.message}</p>}
                    </div>

                    {/* DESCRIPTION */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Product Description</span></label>
                        <input 
                            type="text"
                            {...register("description", { required: true })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.description && <p className="text-red-400 text-sm">{errors.description.message}</p>}
                    </div>

                    {/* PHONE */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Your Phone</span></label>
                        <input 
                            type="text"
                            {...register("phone", { required: true })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <input 
                        className="btn w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white border-none"
                        value="Add Product"
                        type="submit"
                    />
                </div>
            </form>

        </div>
    );
};

export default AddProducts;
