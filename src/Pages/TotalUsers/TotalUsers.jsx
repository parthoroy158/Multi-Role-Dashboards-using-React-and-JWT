import UseUsers from "../../Hooks/UseUsers";

const TotalUsers = () => {
    const [user] = UseUsers()

    return (
        <div className='mt-18 ml-10'>
            <h2>This is the total users page:{user.length}</h2>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            user.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>

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