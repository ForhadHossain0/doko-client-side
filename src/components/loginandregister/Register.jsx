import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import Swal from "sweetalert2";
import { updateProfile } from 'firebase/auth';


const Register = () => {

  const {createUser} = useContext(AuthContext);
  const [message,setMessage] = useState('');
  const [errorMessage,setErrorMessage] = useState();
  const navigate = useNavigate()

  const handleToSubmit = e =>{

    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');
    

    console.log(name,email,password,photo)

    setMessage('');
    setErrorMessage('');

  if(password.length < 6){
    setErrorMessage('your password have to 6 charecters or longer!!')
    return;
  }
  else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password)){
    setErrorMessage('!paswword must have at least one uppercase,lowercase,specialchar and number..')
    return;
  }

createUser(email,password)
  .then((result) => {
    
    updateProfile(result.user,{
      displayName: name,
      photoURL: photo
    })
    .then(()=> console.log('profile updated now.'))
    .catch(()=> console.log(error))

    Swal.fire({
      title: 'Registration Success!',
      text: 'registration successfully complete',
      icon: 'success',
      confirmButtonText: 'Okk'
    })

    console.log(result.user);
    e.target.reset()
    navigate('/')
    
  })

  .catch(error => {
    setMessage(<>{error.message} !Please provide valid data...</>)
    console.log(error.message ,' !Please provide valid data')
  })

}

    return (
        <div>
           
      <div className="hero-content  md:flex block w-full bg-[#0059E7]  ">     
      <img className='md:w-[42%] relative ' src="https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg"  />
        <p className='text-red-400 w-[500px] left-20 top-20 absolute  text-xl'> {message}</p>
        <div className='md:w-[50%] '>
        <form onSubmit={handleToSubmit} className="card-body w-full -mt-48  h-[420px] ">

        <div className="form-control mx-auto ">
         <h1 className='text-2xl font-bold text-white'>Register  your account </h1>
         {/* <p className='text-slate-300 py-3'>Plese login your account and get the services, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, officia.</p> */}
        </div>

        <div className="form-control  w-[80%] mx-auto ">
        <label  className=" text-white text-lg text-left mb-2">Name </label>
        <input name='name'  type="text" placeholder="enter your name" className="input bg-blue-800 text-white " required />
        </div>
        <div className="form-control  w-[80%] mx-auto ">
        <label className=" text-white text-lg text-left mb-2">Email </label>
        <input name='email' type="email" placeholder="enter your email" className="input bg-blue-800 text-white" required />
        </div>

        <div className="form-control w-[80%] mx-auto ">
        <label className=" text-left text-white text-lg mb-2">Password  </label>
        <input name='password' type="password" placeholder="enter your password" className="input bg-blue-800 text-white" required />
        </div>
        <p className='text-left ml-16 text-red-400 text-sm   w-[80%]'>{errorMessage}</p>
        

        <div className="form-control w-[80%] mx-auto ">
        <label className=" text-left text-white text-lg mb-2 ">Photo  </label>
        <input name='photo' type="text" placeholder="enter your photoURL" className="input bg-blue-800 text-white " required />
        </div>

        <div className="form-control  w-[80%] mx-auto "> 
              <button className="btn mt-6 border-0 rounded-none bg-black text-white hover:bg-slate-500 ">Register</button>  
              <Link to={'/login'} className='py-2 text-white' >Already have an account ? <span className=" text-lime-300 ">please login </span></Link> 
        </div>
        
        </form>
        </div>

     </div>

        </div>
    );
};

export default Register;