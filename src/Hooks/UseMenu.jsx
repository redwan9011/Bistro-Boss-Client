// import axios from "axios";
// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseMenu = () => {
    const axiosPublic = useAxiosPublic()
    // const [menus, setMenus] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     axios.get('https://y-iota-lac.vercel.app/menus')
    //         .then(res => {
    //             setMenus(res.data)
    //             setLoading(false)
    //         })
         
    // }, [])

    const {data:menus=[] , isPending:loading , refetch} = useQuery({
        queryKey: ['menus'],
        queryFn: async()=> {
            const res = await axiosPublic('/menus')
            return res.data
        }
    }) 
    return [ menus , loading, refetch]
};

export default UseMenu;