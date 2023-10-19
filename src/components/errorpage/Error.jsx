import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
          <Link to={'/'} className="btn mt-3 bg-red-600 rounded-none text-white">&larr; Go Home</Link>
         <img className="mx-auto w-[50%] " src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1868.jpg?w=740&t=st=1697639533~exp=1697640133~hmac=3882a531f1afca42c5c439ee2ae17fd4dc20f4390a7a89b54f90a0fedbe69355" alt="" />
        </div>
    );
};

export default Error;