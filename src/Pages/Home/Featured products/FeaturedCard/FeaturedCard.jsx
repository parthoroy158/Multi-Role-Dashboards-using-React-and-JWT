import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import UseAuth from '../../../../Hooks/UseAuth';
import UseAxiosPrivate from '../../../../Hooks/UseAxiosPrivate';
import UseCart from '../../../../Hooks/UseCart';
import Swal from 'sweetalert2';



const FeaturedCard = ({ item }) => {
    const { name, price, rating, image, details, currency, _id } = item
    const { user } = UseAuth()
    const axiosPrivate = UseAxiosPrivate()
    const [, refetch] = UseCart()

    const handleAddToCart = (_id) => {
        console.log('ID:', _id)
        const userInfo = {
            email: user.email,
            productId: _id,
            name: name,
            price: price,
            rating: rating,
            details: details,
            currency: currency
        }
        axiosPrivate.post('/lichees', userInfo)
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully added to the cart",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res.data)
                refetch()
            })
    }
    return (
        <div>
            <div className="card bg-base-200 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-full h-70 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-center">{name}</h2>
                    <p>{details}</p>
                    <div className='flex gap-30'>
                        <p className='font-bold'>Price: {price} {currency}</p>
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <button className="btn btn-ghost border-b-amber-400  w-full rounded-xl" onClick={() => handleAddToCart(_id)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;