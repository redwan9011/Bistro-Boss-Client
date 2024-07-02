// import axios from "axios";
// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const UseMenu = () => {
    const axiosPublic = useAxiosPublic()
    // const [menus, setMenus] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     axios.get('http://localhost:5000/menus')
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