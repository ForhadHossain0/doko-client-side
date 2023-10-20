
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';

const Brand4 = () => {

  
  const {loading} = useContext(AuthContext)

  if(loading){
      return <div>  <span className="loading loading-spinner text-info loading-xl mt-40 "></span>  <h2 className='text-xl  text-teal-700'>! please wait content is Loading . . . . </h2>  </div>
  }

const data = useLoaderData();
// console.log(data) 
const Pume = data.filter(data => data.brandname === 'Pume' ) 
console.log(Pume)

return (
      <div className=''>
           {/* carosole start */}
<div className="carousel  h-[500px] w-full">

  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3cb98856968503.59c35e0fefc9b.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://www.nylon.com.sg/wp-content/uploads/2020/09/puma-lazmall-banner-1-scaled.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.squarespace-cdn.com/content/v1/53c44cbde4b056f82568d1bb/ba8feecb-b2a7-4c8d-92c5-d39e41b7ab0c/image-asset.jpeg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://www.shoesensation.com/media/wysiwyg/puma_brandbanner_1600x400.jpg?format=jpeg&auto=webp&fit=bounds&bg-color=FFF" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

</div>
 {/* carosole end */}




 {/* 4 products start  */}

 <div><h1 className="text-5xl mt-12 font-bold  text-[#E50010]">Pume Products</h1></div>

<div className=" md:grid md:grid-cols-2 md:px-0 gap-5 p-10  justify-center  ">


   {Pume.map(Pume=> (
      <div className="mt-10 md:flex rounded-none relative md:w-[600px] md:h-[320px] bg-base-100 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  mx-auto text-center ">
        <div className='text-left md:w-[290px] h-[300px] md:h-full border-lime-500 md:border-e-4   '>
          <figure className='bg-lime-400 w-full h-full   rounded-xl md:shadow-xl '><img className=' w-full h-full  mx-auto ' src={Pume.photo} alt="" /></figure>
        </div>
        <div className='text-left p-2  ml-5 mt-2 w-[230px]'>
          <h3 className='text-3xl font-bold '>Brand <span className='text-lime-400 font-mono'>:{Pume.brandname}</span></h3>
          <p className='text-slate-400 '>Type - {Pume.type}</p>
          <h2 className='text-xl text-lime-400 font-semibold '>{Pume.name}</h2>
          <h1>Price : <span className='text-xl text-pink-600'>{Pume.price}</span>$</h1>
          <p>⭐⭐⭐⭐</p> {/* rating will add later */}
          <p className=' text-left text-sm '>{Pume.details}</p>


          <div>
            <Link to={`/detailproduct/${Pume._id}`}  className='btn mt-4 bg-lime-400 text-white'>Details</Link>
            <Link to={`/updateproduct/${Pume._id}`} className='btn mt-4 ml-5 text-white bg-black'>Update</Link>
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

export default Brand4;