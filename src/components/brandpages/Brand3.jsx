import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";


const Brand3 = () => {

  
  const {loading} = useContext(AuthContext)

  if(loading){
      return <div>  <span className="loading loading-spinner text-info loading-xl mt-40 "></span>  <h2 className='text-xl  text-teal-700'>! please wait content is Loading . . . . </h2>  </div>
  }

  const data = useLoaderData();
  // console.log(data) 
  const Adidas = data.filter(data => data.brandname === 'Adidas' ) 
  console.log(Adidas)
  
  return (

    <div className=''>
  {/* carosole start */}
  <div className="carousel  h-[500px] w-full">
  
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://cdn.shopify.com/s/files/1/0259/9531/3248/files/adidas_new_arrival_july_23.jpg?v=1689672264" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
  
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://i.pinimg.com/originals/4e/31/42/4e3142435b7a0a2f5f1229db876c7ed4.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://i.pinimg.com/originals/3e/66/8b/3e668bb7cbe2a59b57791e1ebb2dcfdb.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
 
  
  </div>
   {/* carosole end */}
  
  
  
  
   {/* 4 products start  */}
  
   <div><h1 className="text-5xl mt-12 font-bold  text-[#E50010]">Nike Products</h1></div>
  
  <div className=" md:grid md:grid-cols-2 md:px-0 gap-5 p-10  justify-center  ">
  
  
     {Adidas.map(Adidas=> (
        <div className="mt-10 md:flex rounded-none relative md:w-[600px] md:h-[320px] bg-base-100 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  mx-auto text-center ">
          <div className='text-left md:w-[290px] h-[300px] md:h-full border-lime-400 md:border-e-4   '>
            <figure className='bg-lime-400 w-full h-full    md:shadow-xl '><img className=' w-full h-full  mx-auto ' src={Adidas.photo} alt="" /></figure>
          </div>
          <div className='text-left p-2  ml-5 mt-2 w-[230px]'>
            <h3 className='text-3xl font-bold '>Brand <span className='text-lime-400 font-mono'>:{Adidas.brandname}</span></h3>
            <p className='text-slate-400 '>Type - {Adidas.type}</p>
            <h2 className='text-xl text-lime-400 font-semibold '>{Adidas.name}</h2>
            <h1>Price : <span className='text-xl text-pink-600'>{Adidas.price}</span>$</h1>
            <p>⭐⭐⭐⭐</p> {/* rating will add later */}
            <p className=' text-left text-sm '>{Adidas.details}</p>
  
  
           <div>
            <Link to={`/detailproduct/${Adidas._id}`}  className='btn mt-4 bg-lime-400 text-white'>Details</Link>
            <Link to={`/updateproduct/${Adidas._id}`} className='btn mt-4 ml-5 text-white bg-black'>Update</Link>
           </div>
  
  
          </div>
        </div>
       
     ))
  
     }
       
   </div>
   {/* 4 products end  */}
             
          </div>
      );
};

export default Brand3;