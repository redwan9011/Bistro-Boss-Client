import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdProductionQuantityLimits } from "react-icons/md";
const AdminHome = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })
    console.log(stats);
    const { user } = UseAuth()
    return (
        <div>
            <h2> HI! {user?.displayName} Welcome Back</h2>

            <div>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary text-3xl">
                            $
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${stats.revenue}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary text-3xl">
                           <FaUsers></FaUsers>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{stats.users}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary text-3xl">
                          <MdProductionQuantityLimits></MdProductionQuantityLimits>
                        </div>
                        <div className="stat-title">All Items</div>
                        <div className="stat-value">{stats.menuItems}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary text-3xl">
                        <LiaCarSideSolid />
                        </div>
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{stats.orders}</div>
                        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;