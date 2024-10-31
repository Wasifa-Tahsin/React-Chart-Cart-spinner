import { useState } from "react";
import Link from "../Link/Link";
import { MdMenu,  MdClose } from "react-icons/md";

const Navbar = () => {
       
    const [open,setOpen] =useState(false)

    const paths = [
        { path: '/home', name: 'Home', id: 1 },
        { path: '/about', name: 'About Us', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/blog', name: 'Blog', id: 5 }
      ];
      
    return (
        <nav className="text-black bg-yellow-500 p-6">
            <div className="md:hidden text-2xl " onClick={()=>setOpen(!open)}>

                {
                    open===true ?< MdClose></ MdClose>:<MdMenu className="text-xl"></MdMenu>
                }
            
            </div>
            <ul className={`md:flex absolute  md:static duration-1000 bg-yellow-200  ${open?'top-16':'-top-80'} px-6 `}>
            {
                
                paths.map(path=><Link key={path.id} path={path}></Link>)
            }
            </ul>
            
        </nav>
    );
};

export default Navbar;