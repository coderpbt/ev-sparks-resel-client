import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../component/Sheard/Loading/Loading';
import { AuthContext } from '../../context/DpiContext/ContextProvider';
import MyProductsTem from './MyProductsTem';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const url = `https://b612-used-products-resale-server-side-coderpbt.vercel.app/productswise?email=${user?.email}`

    const { data: productswise = [], isLoading, refetch } = useQuery({
        queryKey: ['productswise', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json()
            return data
        }

    })



    const handleDelete = item => {
        fetch(`https://b612-used-products-resale-server-side-coderpbt.vercel.app/productswise/${item._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`product deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h3 className="text-3xl mb-5 mt-5">My Product</h3>
            <div className='xl:w-[1200px] mx-auto w-[95%]'>
                <div className="flex justify-between flex-wrap my-10">
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-2'>
                        {
                            productswise?.map(item => <MyProductsTem item={item} key={item._id} handleDelete={handleDelete} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;