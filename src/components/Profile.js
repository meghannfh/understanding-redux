import { useSelector } from "react-redux";
//hook used to access values over states

function Profile() {
    //inside the useSelector hook define which state you want to access
    const user = useSelector((state) => state.user.value)
    const themeColor = useSelector((state) => state.theme.value)


    return(
        <div style={{ color: themeColor }}>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default Profile