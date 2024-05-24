import { useState } from 'react'
import './Login.scss'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleClickBtnLogin = async () => {
        toast.success("login thành công")
        navigate('/')
    }

    const handleClickBtnSignup = () => {
        navigate('/signup')
    }
    return (
        <>
            <div className="login-container">
                <div className="header">
                    <span>Don't have an account yet?</span>
                    <button onClick={handleClickBtnSignup}>Sign up</button>
                    <span className='contact-us'>Contact us</span>
                </div>
                <div className="title col-4 mx-auto">
                    <h3>Typeform</h3>
                </div>
                <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
                <div className="content-form col-4 mx-auto">
                    <div className="form-group">
                        <label>Email</label>
                        <input type={"email"} className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />

                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type={"password"} className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className='forgot-password col-4 '>
                        Forgot password?
                    </div>
                    <div >
                        <button className='btn-login col-4 mx-auto' onClick={handleClickBtnLogin}>Login </button>
                    </div>

                    <div className='text-center'>
                        <span className="back" onClick={() => { navigate("/") }}> &#60;&#60; Back to HomePage</span>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Login