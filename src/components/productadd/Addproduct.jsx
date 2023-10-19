import Swal from "sweetalert2";
import { Link } from 'react-router-dom';


const Addproduct = () => {
  
const handleAddProduct = e =>{
    e.preventDefault();
    const form = e.target;

    const photo = form.photo.value;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value; {/* short description */}
    const rating = form.rating.value;

    const addDataValues = {photo, name, brandname, type,  price, details, rating};
    console.log(addDataValues) 
    
    fetch('http://localhost:5000/products', {
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(addDataValues)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
      Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
    })
}




    return (


        <div>
           
           <div className=" bg-slate-200 min-h-screen ">  
           <Link to={'/'} ><h1 className="text-left font-bold hover:text-red-500"> &larr; Back to home</h1></Link>
           <h2 className="text-3xl font-bold pt-3">Add New product</h2>
            <p className="mx-auto md:w-[80%] px-5 text-sm my-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed molestiae pariatur iusto nobis nisi accusamus fugiat, aliquam eos doloremque aliquid sit. Quo illo corrupti iusto quidem, delectus fugiat adipisci dolore dignissimos dolores cumque doloribus velit. Deserunt rerum eius impedit voluptas.</p>
           
           
           <form  onSubmit={handleAddProduct} className=" mt-10 ml-5 " >
             <div className="md:flex justify-center ">

              <div className="block text-left space-y-5  font-semibold">
                 <div>  
                    <label htmlFor="">Photo</label><br /> <input required placeholder='Enter a products ImageURL' type="text" name="photo" className=" my-2 w-[420px] h-9 p-2" />
                </div>
                <div>
                <label htmlFor="">Name</label><br />       <input required placeholder='Enter a products name' type="text" name="name" className=" my-2 w-[420px] h-9 p-2"  />
                </div>

                <div>
                <label >Brand-name</label><br />
                <select name="brandname" required className="my-2 w-[420px] h-9 p-2">
                   <option value="">Select brand</option>
                   <option value="Rolex">Rolex</option>
                   <option value="H&M">H&M</option>
                   <option value="Nike">Nike</option>
                   <option value="Prado">Prado</option>
                   <option value="Pume">Pume</option>
                   <option value="Adidas">Adidas</option>
                </select>
              </div>


                 <div>
                  <label htmlFor="">Type</label><br /> <input placeholder='Enter a products Type' type="text" name="type" className= "my-2 w-[420px] h-9 p-2" />
                </div>
              </div>
 
              <div className="md:ml-20 text-left space-y-5 font-semibold">
                <div>
                 <label htmlFor="">Price</label> <br /> <input required placeholder='Enter a products  price' type="text" name="price" className=" my-2 w-[420px] h-9 p-2" />
                </div>
                 <div>  
                    <label htmlFor="">Details</label><br /> <input placeholder='Enter a products details' type="text" name="details" className=" my-2 w-[420px] h-9 p-2" />
                </div>
                 <div>
                  <label htmlFor="">rating</label><br /> <input placeholder='Enter a products rating' type="text" name="rating" className="bmy-2 w-[420px] h-9 p-2" />
                </div>
               </div>

             </div>

                <div><input type="submit" value='Add Product' className=" w-[72%] h-9  mt-5 mb-8 text-lg font-mono font-bold text-white bg-[#909091] border-black border rounded hover:bg-red-400 transition-all" /></div>
            </form>        
           </div>
        </div>
    );
};

export default Addproduct;