import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from '../../context/AuthContext.js'
import "./login.scss";

const Login = () => {

    const [credential, setCredential] = useState({
        username: undefined,
        password: undefined,
    })

    const handleChange = (e) => {
        setCredential(prev => (
            { ...prev, [e.target.id]: e.target.value }
        ))
    }

    const { user, loading, error, dispatch } = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credential)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: 'LOGIN_FAIL', payload: err.response.data })
        }
    }

    const handleTest = async (e) => {
        e.preventDefault();
        console.log("click")
        // console.log(credential)
        // const res = await axios.post("/auth/login", credential);
        // console.log(res.data)
    }


    return (
        <main>
            <div className="login">
                <h1>Welcome to Nicolas BookingApp</h1>
                <form>
                    <input type="text" placeholder="username" id="username" onChange={handleChange} />
                    <input type="password" placeholder="password" name="password" id="password" onChange={handleChange} />
                    <button onClick={handleTest}>Login</button>
                </form>
            </div>
        </main>
    )
}

export default Login;