import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updateproduct = () => {
  const products = useLoaderData();
  console.log(products);
  const { _id, photo, name, brandname, type, price, details, rating } =
    products;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;
    {
      /* short description */
    }
    const rating = form.rating.value;

    const addUpdateDataValues = {
      photo,
      name,
      brandname,
      type,
      price,
      details,
      rating,
    };
    console.log(addUpdateDataValues);

    fetch(`https://backend-server-beta.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addUpdateDataValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully complete",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className=" bg-slate-200 min-h-screen ">
        <Link to={"/"}> <h1 className="text-left font-bold hover:text-red-500">   {" "}  &larr; Back to home  </h1> </Link>

        <h2 className="text-3xl font-bold pt-3">Update existing product</h2>
        <p className="mx-auto md:w-[70%] text-sm my-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni labore eaque officia, nemo natus vel, temporibus obcaecati quos maxime molestias inventore at ut nobis quae debitis dolorum aliquid dolores. Sint quis maiores ipsam et iure magni hic libero illum animi.
        </p>

        <form onSubmit={handleUpdateProduct} className=" mt-10 mx-auto ml-4 ">
          <div className="md:flex  justify-center  ">
            <div className="block text-left space-y-5  font-semibold">
              <div>
                <label htmlFor="">Photo</label>
                <br />{" "}
                <input
                  required
                  placeholder="Enter a products ImageURL"
                  type="text"
                  defaultValue={photo}
                  name="photo"
                  className=" my-2 w-[420px] h-9 p-2"
                />
              </div>
              <div>
                <label htmlFor="">Name</label>
                <br />{" "}
                <input
                  required
                  placeholder="Enter a products name"
                  type="text"
                  defaultValue={name}
                  name="name"
                  className=" my-2 w-[420px] h-9 p-2"
                />
              </div>

              <div>
                <label>Brand-name</label>
                <br />
                <select
                  name="brandname"
                  defaultValue={brandname}
                  required
                  className="my-2 w-[420px] h-9 p-2"
                >
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
                <label htmlFor="">Type</label>
                <br />{" "}
                <input
                  placeholder="Enter a products Type"
                  type="text"
                  defaultValue={type}
                  name="type"
                  className="my-2 w-[420px] h-9 p-2"
                />
              </div>
            </div>

            <div className="md:ml-20 text-left space-y-5 font-semibold">
              <div>
                <label htmlFor="">Price</label> <br />{" "}
                <input
                  required
                  placeholder="Enter a products  price"
                  type="text"
                  defaultValue={price}
                  name="price"
                  className=" my-2 w-[420px] h-9 p-2"
                />
              </div>
              <div>
                <label htmlFor="">Details</label>
                <br />{" "}
                 <textarea   placeholder="Enter a products details"
                  type="text"
                  defaultValue={details}
                  name="details"
                  className=" my-2 w-[420px] h-9 p-2">
                  </textarea>
              </div>
              <div>
                <label htmlFor="">rating</label>
                <br />{" "}
                <input
                  placeholder="Enter a products rating"
                  type="text"
                  defaultValue={rating}
                  name="rating"
                  className="bmy-2 w-[420px] h-9 p-2"
                />
              </div>
            </div>
          </div>

          <div>
            <input
              type="submit"
              value="Update"
              className=" w-[72%] h-9  mt-5 mb-8 text-lg font-mono font-bold text-white bg-[#909091] border-black border rounded hover:bg-red-400 transition-all"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updateproduct;
