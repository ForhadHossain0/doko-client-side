import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';

const Brand1 = () => {

  
  const {loading} = useContext(AuthContext)

  if(loading){
      return <div>  <span className="loading loading-spinner text-info loading-xl mt-40 "></span>  <h2 className='text-xl  text-teal-700'>! please wait content is Loading . . . . </h2>  </div>
  }

const data = useLoaderData();
// console.log(data) 
const HM = data.filter(data => data.brandname === 'H&M' ) 
console.log(HM)

return (
      <div className=''>
           {/* carosole start */}
<div className="carousel  h-[500px] w-full">

  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://antavo.com/wp-content/uploads/2021/11/HM-Loyalty-Program-Review.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/03/05155806/hm-sale-online-india.png?resize=951%2C470&ssl=1" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1627469628844/hm-coupons.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://textiletoday.com.bd/storage/uploads/2023/6/6968gSq1wIydH27wVipw.jpeg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

</div>
 {/* carosole end */}




 {/* 4 products start  */}

 <div><h1 className="text-5xl mt-12 font-bold  text-[#E50010]">H&M Products</h1></div>

<div className=" md:grid md:grid-cols-2 md:px-0 gap-5 p-10  justify-center  ">


   {HM.map(HM=> (
      <div className="mt-10 md:flex rounded-none relative md:w-[600px] md:h-[320px] bg-base-100 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  mx-auto text-center ">
        <div className='text-left md:w-[290px] h-[300px] md:h-full border-lime-500 md:border-e-4   '>
          <figure className='bg-lime-400 w-full h-full   rounded-xl md:shadow-xl '><img className=' w-full h-full  mx-auto ' src={HM.photo} alt="" /></figure>
        </div>
        <div className='text-left p-2  ml-5 mt-2 w-[230px]'>
          <h3 className='text-3xl font-bold '>Brand <span className='text-lime-400 font-mono'>:{HM.brandname}</span></h3>
          <p className='text-slate-400 '>Type - {HM.type}</p>
          <h2 className='text-xl text-lime-400 font-semibold '>{HM.name}</h2>
          <h1>Price : <span className='text-xl text-pink-600'>{HM.price}</span>$</h1>
          <p>⭐⭐⭐⭐</p> {/* rating will add later */}
          <p className=' text-left text-sm '>{HM.details}</p>


          <div>
            <Link to={`/detailproduct/${HM._id}`}  className='btn mt-4 bg-lime-400 text-white'>Details</Link>
            <Link to={`/updateproduct/${HM._id}`} className='btn mt-4 ml-5 text-white bg-black'>Update</Link>
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

export default Brand1;