import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import avaterImg from '../../../assets/user.png'
import useAuth from '../../../hooks/useAuth'

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logOut } = useAuth();

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className=' relative mr-4'>
            <div className='flex flex-row items-center gap-3'>
                {/* Become A Host btn */}
                <div className='hidden md:block'>
                    <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'>
                        <NavLink to={'/'}>Home</NavLink>
                    </button>
                    <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'>
                        <NavLink to={'/apartment'}> Apartment</NavLink>
                    </button>
                    {
                        user ? null :
                            <Link to="/login">
                                <button className="btn btn-xs">Login</button>
                            </Link>
                    }
                    <div className='hidden'>
                        {
                            user ? null :
                                <Link to="/signup">
                                    <button className="btn btn-xs">sign up</button>
                                </Link>
                        }
                    </div>
                </div>
                {/* Dropdown btn */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        {/* Avatar */}
                        <img
                            className='rounded-full'
                            referrerPolicy='no-referrer'
                            src={user && user.photoURL ? user.photoURL : avaterImg}
                            alt='profile'
                            height='30'
                            width='30'
                        />

                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[22vw] md:w-[22vw] lg:w-[12vw] bg-orange-300 overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer md: py-5 lg:px-8 '>
                        {
                            user ? <h1 className="font-bold text-red-500 text-center mb-2">{user.displayName}</h1> : null
                        }
                        {
                            user ?  <Link to="/dashboard/myProfile"><button className="btn btn-xs ml-4 md:ml-10 lg:ml-5 mb-2">Dashboard</button></Link>:null
                           
                                    
                                
                        }

                        {
                            user ? <button onClick={handleSignOut} className="btn btn-primary btn-xs text-white"> Sign Out </button> :
                                <Link to="/login">
                                    <button className="btn btn-xs">Login</button>
                                </Link>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuDropdown
