import { Link } from 'react-router-dom'
// import logoImg from '../../../assets/images/logo.png'
import MenuDropdown from './MenuDropdown'
// import { Container } from 'postcss'

const NavBar = () => {
  return (
    <div className=' w-full bg-white rounded-xl  z-10 shadow-sm '>
      <div className='py-4 rounded-xl border-b-[1px]'>
        {/* <Container> */}
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              {/* <img
                className='hidden md:block'
                // src={logoImg}
                alt='logo'
                width='100'
                height='100'
              /> */}
              <h2 className='ml-4'>building </h2>
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        {/* </Container> */}
      </div>
    </div>
  )
}

export default NavBar
