import Swal from "sweetalert2";
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MdDelete, MdEdit } from "react-icons/md";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";



const ManageItems = () => {
    const [menus, ,refetch] = UseMenu()
  const axiosSecure = UseAxiosSecure()
  
    const handleDelte = item => {
        console.log(item._id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menus/${item._id}`)
              console.log(res.data);
           
              if(res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: `${item.name} has been deleted.` ,
                  icon: "success"
                });
                refetch()
              }
              
            }
        });
    }

    const handleUpdateItem = id => {
      console.log(id);
    }
    return (
        <div className="mb-10">
            <SectionTitle subtitle={'Hurry Up'} heading={'Manage All Items'}></SectionTitle>

            <div>
            <div className="overflow-x-auto">
  <table className="table text-center">
    {/* head */}
    <thead className="text-black font-bold text-base">
      <tr>
        <th>
        
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        menus.map((item , ind) => <tr key={item._id}>
            <th>
             {ind +1}
            </th>
            <td>
            <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
            </td>
            <td>
                {
                    item?.name
                }
              
            </td>
            <td>${item?.price}</td>
            <th>
              <Link to={`/dashboard/updateItems/${item._id}`}>
                <button onClick={() => handleUpdateItem(item._id)}> <MdEdit className="text-3xl text-yellow-700" /></button>
              </Link>
            </th>
            <th>
                 <button onClick={() => handleDelte(item)}> <MdDelete className="text-3xl text-red-600" /></button>
            </th>
          </tr>)
      }
      
    
    
   
    </tbody>
  

    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItems;







