import Brandcart from "./Brandcart";
import { FaFacebook } from 'react-icons/fa6';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const MidPartOfHome = ({data}) => {

// console.log(data )

  return (
    <div className="mx-auto w-full">
      <div className=" bg-base-200 w-full mx-auto border-t-2">
        <div className="flex gap-20 md:px-40 md:h-screen  mx-auto justify-center items-center ">
       
          <div className="text-left w-full px-5 mt-10 md:m-0" >
            <p className="flex gap-x-10 mb-5 ml-1 hover:text-rose-500 text-blue-400"><FaFacebook></FaFacebook> <AiFillLinkedin></AiFillLinkedin> <BsYoutube></BsYoutube>  <AiFillTwitterCircle></AiFillTwitterCircle>  </p>
            <h1 className="text-3xl md:text-5xl text-black font-bold  ">Wellcome</h1>
            <h3 className=" pt-2 text-black font-bold">  to our doko fashion website </h3>
            <p className="border-b-2 mt-5   border-black"></p>
            <p className="py-2"> make your everyday look prettier with doko is bangladeshi made. </p>
            <p className="md:w-[500px]  w-full text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, consequuntur modi? Debitis consequatur dolor voluptas vitae officia in veritatis excepturi, expedita temporibus, consectetur exercitationem deleniti ab neque delectus nobis? Quo, molestiae. Expedita laboriosam quaerat qui id veniam. Qui, optio fugit.</p>
            <div className="flex py-4 mt-6 ">
            <button className="btn btn-primary text-black  px-7 bg-slate-200 border-0 shadow-xl rounded-none">Doko</button>
            <button className="btn btn-primary text-black  ml-4 bg-slate-200 border-0  shadow-xl  rounded-none">Fashion</button>
            </div>
          </div>
         
          <div className="md:flex hidden  ">
          <img  src="/image/8.com.png" className="max-w-sm rounded-lg border-2 h-[500px]"   />  
          <img src="/image/8.png" className="max-w-sm rounded-lg h-[500px]" />
          </div>
        </div>
      </div>



{/* //////////////////////////////////////////////////////// */}

<Brandcart data={data} ></Brandcart>

{/* //////////////////////////////////////////////////////// */}




      {/*  */}


      <h1 className="md:text-5xl text-2xl w-full  text-center mx-auto mt-16 font-bold text-[#d1dd2b]">Season Collections</h1>

  <div className=" md:flex  gap-10 px-10 justify-center ">


       <div className="card mt-10 shadow-2xl hover:shadow rounded-none md:w-80 bg-base-100  md:h-[520px] mx-auto text-center ">
         <figure className=" mt-3 w-full md:h-[500px] "> <img className="h-full w-full" src="https://png.pngtree.com/thumb_back/fh260/background/20221106/pngtree-standing-young-model-studio-guy-male-photo-image_662251.jpg"   /> </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">SPRING</h2>
            <p className="btn rounded-full px-10 ">more</p>
          </div>
        </div>

    
       <div className="card mt-10 shadow hover:shadow-2xl  rounded-none md:w-80 bg-base-100  md:h-[520px] mx-auto text-center ">
         <figure className=" mt-3 md:h-[500px] "> <img className="h-full  w-full"  src="https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-business-young-woman-model_158538-2582.jpg?size=626&ext=jpg&ga=GA1.1.767942085.1694632342&semt=ais"   /> </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">SUMMER</h2>
            <p className="btn rounded-full px-10 ">more</p>
          </div>
        </div>
        
       <div className="card mt-10 shadow-2xl hover:shadow rounded-none md:w-80 bg-base-100  md:h-[520px] mx-auto text-center ">
         <figure className=" mt-3 md:h-[500px] w-full"> <img className="h-full  w-full"  src="https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-business-young-woman-model-white-coat-jacket-hipster-cloth-jeans_158538-2815.jpg?size=626&ext=jpg&ga=GA1.1.767942085.1694632342&semt=ais"   /> </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">SPRING</h2>
            <p className="btn rounded-full px-10 ">more</p>
          </div>
        </div>


        <div className="card mt-10 shadow hover:shadow-2xl rounded-none md:w-80 bg-base-100  md:h-[520px] mx-auto text-center ">
         <figure className=" mt-3 md:h-[500px]"> <img  className="h-full  w-full" src="https://img.freepik.com/free-photo/clean-latin-fresh-natural-one_1368-2259.jpg?w=360&t=st=1697749098~exp=1697749698~hmac=4d8c7f83f1daeabca6c5ceb681d4f7490e17bcedcc5bb4714836b2a9c5e137f6"   /> </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">WINTER</h2>
            <p className="btn rounded-full px-10 ">more</p>
          </div>
        </div>


   </div>

      {/*  */}





 <div><h1 className=" text-xl md:text-2xl mt-12 font-bold mx-auto  text-[#E50010]">Stay with us stay happy</h1></div>

<div className="   p-10  md:flex justify-center  ">

      <div className="mt-10 rounded-none  md:w-[600px]  md:h-[500px] bg-base-100 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  mx-auto text-center ">
        <div className='text-left  md:flex  h-1/2     '>
          <figure className=' w-full md:h-full rounded-none border-lime-500 border-e-4   flex justify-center   md:shadow-xl '><img className=' w-full h-full  mx-auto' src='https://i.ebayimg.com/images/g/E50AAOSwImRYFkKd/s-l400.jpg' alt="" /></figure>
          <figure className=' w-full md:h-full  flex justify-center  px-2 md:shadow-xl '><img className=' w-full h-full p-3  mx-auto' src='https://hawaiian-shirt-shop.co.uk/wp-content/uploads/2021/02/RJC610-Tropical-Palm-Red-2.jpg' alt="" /></figure>
        </div>
        <div className=' p-2 md:ml-5 md:mt-10  text-center'>
          <h3 className='md:text-3xl font-bold '>Brand <span className='text-lime-400 font-mono'>OUR MISSION</span></h3>
          <p className='text-slate-400 text-sm '>IS YOUR HAPPINESS</p>
          <h2 className='text-xl text-lime-400 font-semibold '></h2> 
          <p className=' md:w-[80%] mx-auto text-[8px] md:text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate a distinctio facilis ipsam voluptas sed perferendis. Corporis, eveniet totam.</p>

        </div>
      </div>
     
 

   
     
 </div>




      <div><h1 className="text-xl md:text-3xl mt-10 font-bold text-black">What They Said</h1></div>

   <div className="flex flex-wrap gap-5 px-4 justify-center ">

     <div className="card mt-10  rounded-none w-96 bg-base-100 shadow-xl md:h-[500px] ">
        <figure className=" mt-3 px-10 ">
          <img  src="/image/5.png"   />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title md:text-lg text-[12px]">Essence Long Denim</h2>
          <p className="text-[7px] md:text-lg">⭐⭐⭐⭐</p>
          <p className="font-semibold text-[8px] md:text-lg">-Sima-</p>
          <p className="text-[8px] md:text-sm text-justify"> “I like this pants. Its fit and perfect for me. The material is so  comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”  </p>
        </div>
      </div>

     <div className="card mt-10  rounded-none w-96 bg-base-100 shadow-xl md:h-[500px] ">
        <figure className=" mt-3 px-10 ">
          <img  src="/image/6.png"   />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title md:text-lg text-[12px]">Essence Long Denim</h2>
          <p className="text-[7px] md:text-lg">⭐⭐⭐⭐</p>
          <p className="font-semibold text-[8px] md:text-lg">-Lara-</p>
          <p className="text-[8px] md:text-sm text-justify"> “I like this pants. Its fit and perfect for me. The material is so  comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”  </p>
        </div>
      </div>

     <div className="card mt-10  rounded-none w-96 bg-base-100 shadow-xl md:h-[500px] ">
        <figure className=" mt-3 px-10 ">
          <img  src="/image/7.png"   />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title md:text-lg text-[12px]">Essence Long Denim</h2>
          <p className="text-[7px] md:text-lg">⭐⭐⭐⭐⭐</p>
          <p className="font-semibold text-[8px] md:text-lg">-Lisa-</p>
          <p className="text-[8px] md:text-sm  text-justify"> “I like this pants. Its fit and perfect for me. The material is so  comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”  </p>
        </div>
      </div>


   </div>
    </div>
  );
};

export default MidPartOfHome;
