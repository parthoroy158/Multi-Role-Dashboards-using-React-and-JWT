import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "./UseAxiosPrivate";


const UseUsers = () => {
    const axiosPrivate = UseAxiosPrivate()
    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPrivate.get('/user')
            return res.data
        }
    })
    return [user, refetch]
};

export default UseUsers;