import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'



const User = () => {

const usersLoader = useLoaderData();
const [users,setUsers] = useState(usersLoader)

const handleDeleteProduct = (id) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
 .then( result => {
    if (result.isConfirmed) { 
      fetch(`https://backend-server-beta.vercel.app/users/${id}` , {method:'DELETE', } )
     .then(res=> res.json())
     .then(data => {
        if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your coffee has been deleted.',
              'success'
            )}
        const remaining = users.filter(x  => x._id !== id);
        setUsers(remaining)
    })
}})

}

return (
        <div>
            <h2>userlength is :{usersLoader.length}</h2>


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-red-400">
        <th>email</th>
        <th>created</th>
        <th>action </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map(user =>
            <tr className="bg-base-200 " key={user._id}>
            <td>{user.email}</td>
            <td>{user.createdTime}</td>
            <td   >  
                <button onClick={()=> handleDeleteProduct(user ._id)} >X</button> 
            </td>
           </tr>

             )
    }
    </tbody>
  </table>

</div> 
</div>
    );
};

export default User;