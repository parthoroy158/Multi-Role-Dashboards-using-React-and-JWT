import Swal from "sweetalert2";
import UseAxiosPrivate from "../../Hooks/UseAxiosPrivate";
import UseUsers from "../../Hooks/UseUsers";

const TotalUsers = () => {
    const [user, refetch] = UseUsers()
    const axiosPrivate = UseAxiosPrivate()

    const handleAdmin = (user) => {
        console.log('User email:', user._id)
        axiosPrivate.patch(`/user/${user._id}`)
            .then(res => {
                Swal.fire({
                    title: `${user.name} Is now admin!`,
                    icon: "success",
                    draggable: true
                });
                refetch()
            })
    }

    return (
        <div className='mt-18 ml-10'>
            <h2 className="text-3xl font-bold text-center mt-2">Total users:({user.length})</h2>
            <div className="overflow-x-auto md:w-250 w-full text-center mt-5">
                <table className="table">
                    {/* head */}
                    <thead className="w-full">
                        <tr className="text-center w-full">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {/* row 1 */}
                        {
                            user.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td className="font-bold">{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === "admin" ? <p className="font-bold">Admin</p> : <button className="btn btn-sm" onClick={() => handleAdmin(user)}>
                                            Role Admin
                                        </button>
                                    }
                                </td>
                                <td><button className="btn btn-sm">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TotalUsers;