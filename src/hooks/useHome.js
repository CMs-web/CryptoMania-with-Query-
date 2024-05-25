import { useQuery } from "@tanstack/react-query";
import { fetchTrendCoins } from "../Providers/Coins/coinsServices";

const useHome = () => {
   const {
     data: coins,
     isPending,
     isError,
   } = useQuery({
     queryKey: ["trendingCoins"],
     queryFn: fetchTrendCoins,
   });
    return {coins,isPending,isError}
}

export default useHome
