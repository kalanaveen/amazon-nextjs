import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import { selectItems } from "../slices/basketSlice";


function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    return (
        <header>
            {/* top nav */}
            <div className='flex items-center p-1 flex-grow py-2 bg-amazon_blue'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <Image
                        onClick={() => router.push("/")}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className='cursor-pointer'
                    />
                </div>
                {/* search */}
                <div className='bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer'>
                    <input className='p-2 px-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' type="text" />
                    <SearchIcon className='h-12 p-4' />
                </div>
                {/* right */}
                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div onClick={!session ? signIn : signOut} className='link'>
                        <p>{session ? `Hello, ${session.user.name}` : "sign in"}</p>
                        <p className='para'>Account & Lists</p>
                    </div>
                    <div onClick={() => session && router.push('/orders')} className='cursor-pointer link'>
                        <p>Returns</p>
                        <p className='para'>& Orders</p>
                    </div>
                    <div onClick={() => router.push("/checkout")} className='link relative flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>
                        <ShoppingCartIcon className='h-10' />
                        <p className='hidden md:inline para mt-2'>Cart</p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
            <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' />
                    All
                </p>
                <p className='link'>Best Sellers</p>
                <p className='link'>Prime</p>
                <p className='link'>Amazon Pay</p>
                <p className='link hidden md:inline-flex'>Fashion</p>
                <p className='link hidden md:inline-flex'>Electronics</p>
                <p className='link hidden md:inline-flex'>computers</p>
                <p className='link hidden md:inline-flex'>New Releases</p>
                <p className='link hidden md:inline-flex'>Customer Service</p>
            </div>
        </header>
    )
}

export default Header;
