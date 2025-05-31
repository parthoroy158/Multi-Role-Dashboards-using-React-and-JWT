import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const FeaturedCard = ({ item }) => {
    const { name, price, rating, image, details, currency } = item
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
                    <button className="btn btn-ghost border-b-amber-400  w-full rounded-xl">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;