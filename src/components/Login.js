import { useDispatch } from "react-redux"
//used to modify values over states
import { login, logout } from '../features/userSlice'

function Login() {
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => {dispatch(login({
                //this is the action payload
                //that will be equaled to the new value of state
                name: "Kibum",
                age: 32,
                email: "shineeworld@sm.com"
            }))}}
            >Login
            </button>

            <button onClick={() => dispatch(logout())}>
                Logout
            </button>
        </div>
    )
}

export default Login