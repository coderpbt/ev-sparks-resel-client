
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/DpiContext/ContextProvider';

const BookingModal = ({ book, setBook }) => {
    const { name : productName, resale_price} = book;
    const dateTime = new Date().toLocaleTimeString("en-US")

    const {user} = useContext(AuthContext)
   

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const locationmetting = form.locationmetting.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            bookinDate : dateTime,
            productName: productName,
            sellerName: name,
            locationmetting,
            email,
            phone,
            resale_price
        }

        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                setBook(null);
                toast.success('Book Confirm')
            }else{
                toast.warning(data.message)
            }
        })

        
    }
    

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <h3 className="text-lg font-bold">${resale_price}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={dateTime} className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="locationmetting" type="text" placeholder="Metting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;