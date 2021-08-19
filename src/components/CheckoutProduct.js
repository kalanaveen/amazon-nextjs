import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ id, title, description, category, image, price, hasPrime, rating }) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = { id, title, description, category, image, price, hasPrime, rating };

        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* middle */}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className='h-5 text-yellow-500' />
                    ))}
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency
                    quantity={price}
                    currency="INR"
                />
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img loading="lazy" className='w-12' src="https://links.papareact.com/fdw" alt="prime" />
                        <p className='text-xs text-gray-500'>FREE Next-day delivery</p>
                    </div>
                )}
            </div>
            {/* right add/remove button */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToBasket} className='button mt-auto'>Add To Cart</button>
                <button onClick={removeItemFromBasket} className='button mt-auto'>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
