import { useLoaderData } from "react-router-dom";
import Footer from "../footer/Footer";
// import Navbar from "../navbar/Navbar";
import MidPartOfHome from "./MidPartOfHome";

const Home = () => {

  const data = useLoaderData()
  // console.log(data);
  
  
  return (
    <> 
     {/* <Navbar></Navbar> */}

     <MidPartOfHome  data={data}  ></MidPartOfHome>
  
     <Footer></Footer>
    </>
  );
};

export default Home;