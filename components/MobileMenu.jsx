import { Links } from "../constants/links";
import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <>
      <label className="swap swap-rotate md:hidden">
        <input
          type="checkbox"
          onClick={mobileMenuHandler}
          defaultChecked={openMobileMenu ? false : true}
        />
        <HiMenu className="dark:text-white swap-on fill-current w-6 h-6" />
        <MdOutlineClose className="dark:text-white swap-off fill-current w-6 h-6" />
      </label>
      {openMobileMenu ? (
        <div className="mobile-menu">
          {Links.map((link, index) => (
            <Link key={index} href={link.route}>
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default MobileMenu;
