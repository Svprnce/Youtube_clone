import Fetchvideos from "../services/fetchvideos";
import { useQuery } from "@tanstack/react-query";


const useLoadvideos = ()=>{
    return useQuery(['yt_videos'], Fetchvideos,{
        staleTime : 500000,
        cacheTime : 100000
    })
}

export default useLoadvideos