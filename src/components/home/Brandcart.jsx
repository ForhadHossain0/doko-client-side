import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";


const Brandcart = ({data}) => {

// console.log(data)


const handleProductAvailability = () =>{
  Swal.fire({
    title: 'Sorry!',
    text: `This barnd Products are not available.. ☹️` ,
    icon: 'error',
    confirmButtonText: ' try another one'
  })
}

    return (

        <>  
        <h1 className='md:text-4xl text-xl font-semibold mt-16'>Our Most standard products Brands  here</h1>
        <p>if you haved chosen any  brand here from her then please explor it.</p>
       <div className="flex px-10 justify-center">
       <div className='grid  md:grid-cols-2 lg:grid-cols-3   my-16'>


             <Link  to={'/brand1'}>

             <div className=' w-[150px] h-[150px] md:w-[250px] md:h-[200px] transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] m-3 '>
              <img className='flex items-center h-[70%] md:h-[80%] p-4 mx-auto' src="https://static.brandirectory.com/logos/hmaa001_800px_hm_logosvg.png" alt="" />
              <p className='text-xl border-[#60ff39] w-16  mx-auto border-b-4 rounded font-extrabold'>H&M</p>
             </div>
             </Link>
        
             <Link  to={'/brand2'}>
             <div className='  md:w-[250px] w-[150px] h-[150px] md:h-[200px] transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  m-3 '>
              <img className='flex items-center h-[70%] md:h-[80%] mx-auto p-4' src="https://static.brandirectory.com/logos/nike001_1200px_logo_nikesvg.png" alt="" />
              <p className='text-xl border-[#60ff39] w-16 mx-auto border-b-4 rounded font-extrabold'>Nike</p>
             </div>
             </Link>    

           <Link to='/brand3'>
             <div className=' md:w-[250px] w-[150px] h-[150px] md:h-[200px] transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] m-3 '>
              <img className='flex items-center h-[70%] md:h-[80%] p-4 mx-auto' src="https://static.brandirectory.com/logos/adis001_adidas_logo_e1468257076328.jpg" alt="" />
              <p className='text-xl border-[#60ff39] w-20 mx-auto border-b-4 rounded  font-extrabold'>Adidas</p>
              </div>
            </Link>
         
           <Link to='/brand4'>
             <div className=' md:w-[250px] w-[150px] h-[150px] md:h-[200px] transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] m-3 '>
               <img className='flex items-center h-[70%] md:h-[80%] p-4 mx-auto' src="https://static.brandirectory.com/logos/puma001_114305c7b06fc055c0bacd368433895b.jpg" alt="" />
               <p className='text-xl  border-[#60ff39] w-20 mx-auto border-b-4 rounded font-extrabold'>Pume</p>
              </div>
           </Link>

           <Link to='/brand5'>
            <div className=' md:w-[250px] w-[150px] h-[150px] md:h-[200px] transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] m-3 '>
              <img className='flex items-center h-[70%] md:h-[80%] p-4 mx-auto' src="https://static.brandirectory.com/logos/rolx002_1200px_rolex_logosvg.png" alt="" />
              <p className='text-xl border-[#60ff39] w-20 mx-auto border-b-4 rounded font-extrabold'>Rolex</p>
            </div>
           </Link>
         
            <Link onClick={handleProductAvailability} >   
             <div className='  md:w-[250px] w-[150px] h-[150px] md:h-[200px] transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  m-3 '>
              <img className='flex items-center h-[70%] md:h-[80%] p-4 mx-auto' src="https://static.brandirectory.com/logos/praa001_prada_logo.png" alt="" />
              <p className='text-xl border-[#60ff39] w-20 mx-auto border-b-4 rounded font-extrabold'>Prada</p>
            </div>
           </Link>
         
            
      
            
            
            
            
            


        </div>
       </div>

        </>
    );
};

export default Brandcart;