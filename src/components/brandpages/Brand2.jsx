import { Link, useLoaderData } from "react-router-dom";


const Brand2 = () => {

  const data = useLoaderData();
  // console.log(data) 
  const Nike = data.filter(data => data.brandname === 'Nike' ) 
  console.log(Nike)
  
  return (

    <div className=''>
  {/* carosole start */}
  <div className="carousel  h-[500px] w-full">
  
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://hips.hearstapps.com/hmg-prod/images/032723-sneakers-6421c3c5f3f51.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
  
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/nike-shoes-facebook-ad-design-template-d6596b25a6b7653604b53b589c4df176_screen.jpg?ts=1613405853" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://cdn.dribbble.com/users/6554824/screenshots/14735696/banner_4x.jpg" className="w-full" />
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
  
  
     {Nike.map(Nike=> (
        <div className="mt-10 md:flex rounded-none relative md:w-[600px] md:h-[320px] bg-base-100 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  mx-auto text-center ">
          <div className='text-left md:w-[290px] h-[300px] md:h-full border-lime-400 md:border-e-4   '>
            <figure className=' w-full h-full    md:shadow-xl '><img className=' w-full h-full  mx-auto ' src={Nike.photo} alt="" /></figure>
          </div>
          <div className='text-left p-2  ml-5 mt-2 w-[230px]'>
            <h3 className='text-3xl font-bold '>Brand <span className='text-lime-400 font-mono'>:{Nike.brandname}</span></h3>
            <p className='text-slate-400 '>Type - {Nike.type}</p>
            <h2 className='text-xl text-lime-400 font-semibold '>{Nike.name}</h2>
            <h1>Price : <span className='text-xl text-pink-600'>{Nike.price}</span>$</h1>
            <p>⭐⭐⭐⭐</p> {/* rating will add later */}
            <p className=' text-left text-sm '>{Nike.details}</p>
  
  
           <div>
            <Link to={`/detailproduct/${Nike._id}`}  className='btn mt-4 bg-lime-400 text-white'>Details</Link>
            <Link to={`/updateproduct/${Nike._id}`} className='btn mt-4 ml-5 text-white bg-black'>Update</Link>
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

export default Brand2;