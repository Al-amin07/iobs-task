import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon ";


const useCart = () => {
    const { user, loading } = useAuth();
    const axiosCommon = useAxiosCommon();
    const { data : carts = {}, isLoading, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/add-to-cart/${user?.email}`)
            return data
        }
    })
    return [carts, isLoading, refetch];
    
};

export default useCart;