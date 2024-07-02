import UseAuth from "../../Hooks/UseAuth";


const UserHome = () => {
    const { user} = UseAuth()
    return (
        <div>
            <h2> HI! {user?.displayName} Welcome Back</h2>
        </div>
    );
};

export default UserHome;