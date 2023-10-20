
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import { useContext } from 'react';

const Brand5 = () => {

  
  const {loading} = useContext(AuthContext)

  if(loading){
      return <div>  <span className="loading loading-spinner text-info loading-xl mt-40 "></span>  <h2 className='text-xl  text-teal-700'>! please wait content is Loading . . . . </h2>  </div>
  }

const data = useLoaderData();
// console.log(data) 
const Rolex = data.filter(data => data.brandname === 'Rolex' ) 
console.log(Rolex)

return (
      <div className=''>
           {/* carosole start */}
<div className="carousel  h-[500px] w-full">

  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://s3.amazonaws.com/ISHOWIMAGES/Rolex/Rolex+Module/banner-xs_datejust-36_portrait.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://miro.medium.com/v2/resize:fit:800/1*aZO8m9FEcLQ3iB7lPvZArw.jpeg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://watchexchange.sg/wp-content/uploads/2023/04/popular-rolex-watch-collections.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 


</div>
 {/* carosole end */}




 {/* 4 products start  */}

 <div><h1 className="text-5xl mt-12 font-bold  text-[#d4e724]">Rolex Products</h1></div>

<div className=" md:grid md:grid-cols-2 md:px-0 gap-5 p-10  justify-center  ">


   {Rolex.map(Rolex=> (
      <div className="mt-10 md:flex rounded-none relative md:w-[600px] md:h-[320px] bg-base-100 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  mx-auto text-center ">
        <div className='text-left md:w-[290px] h-[300px] md:h-full border-lime-500 md:border-e-4   '>
          <figure className='bg-white w-full h-full  p-4 md:shadow-xl '><img className=' w-full h-full  mx-auto ' src={Rolex.photo} alt="" /></figure>
        </div>
        <div className='text-left p-2  ml-5 mt-2 w-[230px]'>
          <h3 className='text-3xl font-bold '>Brand <span className='text-lime-400 font-mono'>:{Rolex.brandname}</span></h3>
          <p className='text-slate-400 '>Type - {Rolex.type}</p>
          <h2 className='text-xl text-lime-400 font-semibold '>{Rolex.name}</h2>
          <h1>Price : <span className='text-xl text-pink-600'>{Rolex.price}</span>$</h1>
          <p>⭐⭐⭐⭐</p> {/* rating will add later */}
          <p className=' text-left text-sm '>{Rolex.details}</p>


          <div>
            <Link to={`/detailproduct/${Rolex._id}`}  className='btn mt-4 bg-lime-400 text-white'>Details</Link>
            <Link to={`/updateproduct/${Rolex._id}`} className='btn mt-4 ml-5 text-white bg-black'>Update</Link>
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

export default Brand5;