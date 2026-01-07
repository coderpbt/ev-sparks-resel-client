import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';


const AllSeller = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`https://reseller-ev.vercel.app/users`);
      const data = await res.json();
      return data;
    }
  });

  const handleMakeAdmin = id => {
    fetch(`https://reseller-ev.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.')
          refetch();
        }
      })
  }


      const handleDelete = item => {
          fetch(`https://reseller-ev.vercel.app/users/${item._id}`, {
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

  
  return (
    <div>
    <h2 className="text-3xl">All Users</h2>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className='text-black'>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Account Option</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => <tr className='text-black' key={user._id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
              <td><button onClick={() => handleDelete(user)} className='btn btn-xs btn-danger'>Delete</button></td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AllSeller;