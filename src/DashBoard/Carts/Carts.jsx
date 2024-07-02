import Swal from "sweetalert2";
import UseCart from "../../Hooks/UseCart";
import { MdDelete } from "react-icons/md";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";


const Carts = () => {
    const axiosSecure = UseAxiosSecure()
    const [cart , refetch] = UseCart()
    const price = cart.reduce((total, item) => total + item.price
        , 0)
    const totalPrice = price.toFixed(2)


    const handleDelte = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              refetch()
                        }
                    })

            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-3xl">Total Items : {cart.length}</h1>
                <h2 className="text-3xl font-bold">Total Price: ${totalPrice} </h2>
             {
                cart.length ?   <Link to='/dashboard/payment'> <button  className="btn btn-primary">Pay</button></Link> : 
                <button disabled className="btn btn-primary">Pay</button>
             }
            </div>

            <div className="overflow-x-auto"> 
                <table className="table">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>

                            </th>
                            <th>Item image</th>
                            <th>Item Name</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            cart.map((item, ind) => <tr key={item._id}>
                                <th>
                                    {ind + 1}
                                </th>
                                <td>
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td className="text-center">
                                    {item?.name}
                                </td>
                                <td className="text-center">{item?.price}</td>
                                <th>
                                    <button onClick={() => handleDelte(item._id)}> <MdDelete className="text-3xl text-red-600" /></button>
                                </th>
                            </tr>)
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Carts;