
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import auth from "../../../firebase/firebase.config";
import { AiOutlineHome } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { BiMessageAltAdd } from 'react-icons/bi';
import { FaShopify } from 'react-icons/fa';
// import { BiMessageAltAdd } from 'react-icons/bi';
// import { BiMessageAltAdd } from 'react-icons/bi';


const Navbar = () => {

  
  const {user,singOut} = useContext(AuthContext);

  const handleToSingOut = () =>{
    singOut(auth)
    .then(()=>console.log('user loged out'))
    .catch(() => console.log('some trubole here'))
  }


    const links = <>
    <NavLink to='/'>          <li ><p href="" className="hover:rounded-none font-semibold "> <AiOutlineHome></AiOutlineHome> Home</p></li></NavLink>
    <NavLink to='/addproduct'><li ><p href="" className="hover:rounded-none font-semibold mr-2"> <BiMessageAltAdd></BiMessageAltAdd> Add Product</p></li></NavLink>
    <NavLink to='/mycart'>    <li ><p href="" className="hover:rounded-none font-semibold mr-2 text-lime-500"><BsCart></BsCart>My Cart</p></li></NavLink>
    </>

  return (
    <div className="navbar  bg-[#F2F2F2] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"  > <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M4 6h16M4 12h8m-8 6h16"  />  </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" >
            {links}
          </ul>
        </div>

        <div className="navbar-start w-full hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {links}
        </ul>
      </div>

      </div>
        <div className="navbar-center ">
        <a  className="font-semibold flex items-center text-2xl"> <span className="text-rose-500 ">D</span> oko-Fashion    <FaShopify className="ml-2 text-lime-400"> </FaShopify> </a>
        </div>

      <div className="navbar-end m-0 ">
      {                  
        user && user ?  <> 
                         <img className="w-12 h-12 border-2 border-lime-300 mr-5 rounded-full" src={user?.photoURL} alt="" />
                         <Link to={'/'} onClick={handleToSingOut}   className="btn bg-[#787a79] border-0 btn-primary text-white rounded-none">Log out</Link>  
                        </> 

                     :  <Link  to='/login' className="btn btn-primary  text-white rounded-none">Sing in</Link>
        
      }
      </div>

    </div>
  );
};

export default Navbar;
