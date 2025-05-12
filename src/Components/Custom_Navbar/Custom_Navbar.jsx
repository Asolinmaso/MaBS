
import { Menus } from "./utils";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import Mabs from "../../assets/Logo/MABS.png";
import Manvian from '../../assets/Logo/ManvianLogo.png'
import { Link } from "react-router-dom";
import './Navbar.css'
export default function Custom_Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 text-[15px]  bg-[#18181A] lg:bg-black/90 text-white z-50 shadow ">
      <nav className="px-4 flex items-center justify-between w-full max-w-7xl  mx-auto h-full ">
        <div className="flex items-center gap-x-3 pl-10 lg:pl-0">
          <img src={Mabs} alt="Mabs Logo" className="h-10" />
        </div>

        <ul className="gap-x-4 hidden lg:flex items-center">
          {Menus.map((menu) => (
            <DesktopMenu menu={menu} key={menu.name}  />
            
          ))}
        </ul>

        {/* Right section */}
        <div className="mb-4">
          <img
            className="h-10 hidden lg:block "
            src={Manvian}
            alt="Manvian"
          />
          <div className="lg:hidden ml-10">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
}