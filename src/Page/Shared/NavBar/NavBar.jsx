
import Logo from '../logo/logo';
import MenuDropdown from './MenuDropdown'





const NavBar = () => {
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
      <div className="navbar-start">

        <a className="btn btn-ghost md:text-xl"> <Logo></Logo> </a>
      </div>

      <div className="navbar-end">
        <MenuDropdown></MenuDropdown>
      </div>
    </div>
  );
};

export default NavBar;
