
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { AuthContext } from '../provider/Authprovider';
import { useContext } from 'react';

const Root = () => {

    const {loading} = useContext(AuthContext)

    if(loading){
        return <div>  <span className="loading loading-spinner text-info loading-xl mt-40 "></span>  <h2 className='text-xl  text-teal-700'>! please wait content is Loading . . . . </h2>  </div>
    }
    
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    );
};

export default Root;