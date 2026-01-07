import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../component/Sheard/Loading/Loading';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';

const UpdateProduct = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const date = new Date().toLocaleTimeString();
    console.log("user", user);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Fetch existing product data
    const { data: product, isLoading: productLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const res = await fetch(`https://reseller-ev.vercel.app/productswise/${id}`);
            const data = await res.json();
            return data[0]; // Since your API returns an array
        }
    });

    // Fetch categories
    const { data: productSpecialty, isLoading: categoriesLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://reseller-ev.vercel.app/categoris');
            return res.json();
        }
    });

    // Populate form with existing data
    useEffect(() => {
        if (product) {
            reset({
                name: product.productName,
                location: product.location,
                reprice: product.reselPrice,
                orgprice: product.originPrice,
                usesofyr: product.useOfYear,
                pcondition: product.productCondition,
                specialty: product.category_id,
                email: product.email,
                yname: product.yourName,
                description: product.productDiscription,
                phone: product.phone
            });
        }
    }, [product, reset]);

    const handleUpdateProduct = data => {
        // Check if new image is uploaded
        if (data.image && data.image[0]) {
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
                    updateProductData(imgData.data.url, data);
                }
            });
        } else {
            // Keep existing image
            updateProductData(product.image, data);
        }
    };

    const updateProductData = (imageUrl, data) => {
        const updatedProduct = {
            image: imageUrl,
            productName: data.name,
            location: data.location,
            reselPrice: data.reprice,
            originPrice: data.orgprice,
            useOfYear: data.usesofyr,
            productCondition: data.pcondition,
            category_id: data.specialty,
            yourName: data.yname,
            productDiscription: data.description,
            phone: data.phone,
            date
        };

        fetch(`https://reseller-ev.vercel.app/productswise/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(result => {
            toast.success(`${data.name} updated successfully`);
            navigate('/myproduct');
        })
        .catch(error => {
            toast.error('Failed to update product');
            console.error(error);
        });
    };

    if (productLoading || categoriesLoading) {
        return <Loading />;
    }

    return (
        <div className="p-9 bg-[#0f0f0f] text-gray-200"> 
            <h2 className="text-4xl font-bold mb-8 text-gray-100">Update Product</h2>
            <form onSubmit={handleSubmit(handleUpdateProduct)}>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">

                    {/* PRODUCT IMAGE */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-gray-300">Product Image (Leave empty to keep current)</span>
                        </label>
                        <input 
                            type="file"
                            {...register("image")}
                            className="file-input file-input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {product?.image && (
                            <div className="mt-2">
                                <img src={product.image} alt="Current" className="w-32 h-32 object-cover rounded" />
                            </div>
                        )}
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
                            {productSpecialty?.map(s => (
                                <option key={s._id} value={s._id}>{s.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* EMAIL - DISABLED */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Your Email (Cannot be changed)</span></label>
                        <input 
                            disabled
                            type="email"
                            {...register("email")}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-400 disabled:bg-[#2a2a2a] disabled:cursor-not-allowed"
                        />
                    </div>

                    {/* YOUR NAME */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Your Name</span></label>
                        <input 
                            type="text"
                            {...register("yname", { required: "Name is required" })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.yname && <p className="text-red-400 text-sm">{errors.yname.message}</p>}
                    </div>

                    {/* DESCRIPTION */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Product Description</span></label>
                        <input 
                            type="text"
                            {...register("description", { required: "Description is required" })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.description && <p className="text-red-400 text-sm">{errors.description.message}</p>}
                    </div>

                    {/* PHONE */}
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text text-gray-300">Your Phone</span></label>
                        <input 
                            type="text"
                            {...register("phone", { required: "Phone is required" })}
                            className="input input-bordered w-full bg-[#1b1b1b] border-gray-600 text-gray-200"
                        />
                        {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <input 
                        className="btn w-full mt-4 bg-green-600 hover:bg-green-700 text-white border-none"
                        value="Update Product"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;