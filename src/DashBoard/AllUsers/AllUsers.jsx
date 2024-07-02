import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiossecure = UseAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiossecure.get('/users')
            return res.data
        }
    })
    // console.log(users);

    const handleDelete = (id) => {
        console.log('click', id);

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

                axiossecure.delete(`/users/${id}`)
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

    const handleMakeAdmin = (user) => {
        console.log(user._id);
        axiossecure.patch(`/users/admin/${user._id}`)

            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.name} admin successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }
    return (
        <div>
            <h1>All Users:{users.length} </h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, ind) => <tr key={user._id}>
                                    <th>{ind + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? <>
                                                <FaUser className="text-3xl text-black " />
                                            </> :
                                                <button onClick={() => handleMakeAdmin(user)} className="bg-yellow-600 p-2"> <FaUsers className="text-3xl text-white " /></button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)}> <MdDelete className="text-3xl text-red-600" /></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;