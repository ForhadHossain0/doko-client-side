import Brandcart from "./Brandcart";
import { FaFacebook } from 'react-icons/fa6';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

const MidPartOfHome = ({data}) => {

// console.log(data )

  return (
    <>
      <div className="hero min-h-screen bg-base-200 border-t-2">
        <div className="hero-content flex-col lg:flex-row">
          {/* <img src="../../../public/image/3.png" className="max-w-sm rounded-lg"  />
          <img  src="../../../public/image/4.png" className="max-w-sm rounded-lg "/> */}
          <div className="text-left" >
            <p className="flex gap-x-10 mb-5 ml-1 text-blue-400"><FaFacebook></FaFacebook> <AiFillLinkedin></AiFillLinkedin> <BsYoutube></BsYoutube>  <AiFillTwitterCircle></AiFillTwitterCircle>  </p>
            <h1 className="text-5xl text-black font-bold  ">Wellcome</h1>
            <h3 className=" pt-2 text-black font-bold">  to our doko fashion website </h3>
            <p className="border-b-2 mt-5 border-black"></p>
            <p className="py-2"> make your everyday look prettier with doko is bangladeshi made is  bangladeshi made, </p>
            <p className="w-[600px] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, consequuntur modi? Debitis consequatur dolor voluptas vitae officia in veritatis excepturi, expedita temporibus, consectetur exercitationem deleniti ab neque delectus nobis? Quo, molestiae. Expedita laboriosam quaerat qui id veniam. Qui, optio fugit.</p>
            <button className="btn btn-primary text-black mt-6 px-7 bg-slate-200 border-0 shadow-xl rounded-none">Doko</button>
            <button className="btn btn-primary text-black mt-6 ml-4 bg-slate-200 border-0  shadow-xl  rounded-none">Fashion</button>
          </div>
         
          <img  src="../../../public/image/1.png" className="max-w-sm rounded-lg "   />  
          <img src="../../../public/image/2.png" className="max-w-sm rounded-lg " />
        </div>
      </div>



{/* //////////////////////////////////////////////////////// */}

<Brandcart data={data} ></Brandcart>

{/* //////////////////////////////////////////////////////// */}




      {/*  */}


      <div><h1 className="text-5xl mt-16 font-bold text-[#d1dd2b]">Season Collections</h1></div>

  <div className=" md:flex gap-10 px-10 justify-center ">


       <div className="card mt-10 shadow-2xl rounded-none w-80 bg-base-100  h-[520px] mx-auto text-center ">
         <figure className=" mt-3 w-full md:h-[500px] "> <img className="h-full w-full" src="https://png.pngtree.com/thumb_back/fh260/background/20221106/pngtree-standing-young-model-studio-guy-male-photo-image_662251.jpg"   /> </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">SPRING</h2>
            <p className="btn rounded-full px-10 ">more</p>
          </div>
        </div>

    
       <div className="card mt-10 shadow  rounded-none w-80 bg-base-100  h-[520px] mx-auto text-center ">
         <figure className=" mt-3 md:h-[500px] "> <img className="h-full  w-full"  src="https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-business-young-woman-model_158538-2582.jpg?size=626&ext=jpg&ga=GA1.1.767942085.1694632342&semt=ais"   /> </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">SUMMER</h2>
            <p className="btn rounded-full px-10 ">more</p>
          </div>
        </div>
        
       <div className="card mt-10 shadow-2xl rounded-none w-80 bg-base-100  h-[520px] mx-auto text-center ">
         <figure className=" mt-3 md:h-[500px] w-full"> <img className="h-full  w-full"  src="https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-brunette-business-young-woman-model-white-coat-jacket-hipster-cloth-jeans_158538-2815.jpg?size=626&ext=jpg&ga=GA1.1.767942085.1694632342&semt=ais"   /> </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">SPRING</h2>
            <p className="btn rounded-full px-10 ">more</p>
          </div>
        </div>


        <div className="card mt-10 shadow rounded-none w-80 bg-base-100  h-[520px] mx-auto text-center ">
         <figure className=" mt-3 md:h-[500px]"> <img  className="h-full  w-full" src="https://img.freepik.com/free-photo/clean-latin-fresh-natural-one_1368-2259.jpg?w=360&t=st=1697749098~exp=1697749698~hmac=4d8c7f83f1daeabca6c5ceb681d4f7490e17bcedcc5bb4714836b2a9c5e137f6"   /> </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">WINTER</h2>
            <p className="btn rounded-full px-10 ">more</p>
          </div>
        </div>


   </div>

      {/*  */}



      <div><h1 className="text-3xl mt-10 font-bold text-black">What They Said</h1></div>

   <div className="flex flex-wrap gap-5 justify-center ">

     <div className="card mt-10  rounded-none w-96 bg-base-100 shadow-xl h-[500px] ">
        <figure className=" mt-3 px-10 ">
          <img  src="../../../public/image/5.png"   />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Essence Long Denim</h2>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="font-semibold">-Lisa-</p>
          <p className="text-sm text-justify"> “I like this pants. Its fit and perfect for me. The material is so  comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”  </p>
        </div>
      </div>

     <div className="card mt-10  rounded-none w-96 bg-base-100 shadow-xl h-[500px] ">
        <figure className=" mt-3 px-10 ">
          <img  src="../../../public/image/6.png"   />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Essence Long Denim</h2>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="font-semibold">-Lisa-</p>
          <p className="text-sm text-justify"> “I like this pants. Its fit and perfect for me. The material is so  comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”  </p>
        </div>
      </div>

     <div className="card mt-10  rounded-none w-96 bg-base-100 shadow-xl h-[500px] ">
        <figure className=" mt-3 px-10 ">
          <img  src="../../../public/image/7.png"   />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Essence Long Denim</h2>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="font-semibold">-Lisa-</p>
          <p className="text-sm text-justify"> “I like this pants. Its fit and perfect for me. The material is so  comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”  </p>
        </div>
      </div>


   </div>
    </>
  );
};

export default MidPartOfHome;
