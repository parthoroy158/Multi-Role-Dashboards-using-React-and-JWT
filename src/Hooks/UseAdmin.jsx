import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosPrivate from "./UseAxiosPrivate";

const UseAdmin = () => {
    const axiosPrivate = UseAxiosPrivate();
    const { user } = UseAuth();

    const { data: isAdmin } = useQuery({
        // enabled: !!user?.email, // ensures the query runs only when the email is available
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosPrivate.get(`/user/admin/${user.email}`);
            return res.data?.admin;
        }
    });

    return [isAdmin];
};

export default UseAdmin;
