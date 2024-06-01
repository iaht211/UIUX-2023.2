import { useState } from 'react'
import './Login.scss'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import logo_img from '../../assets/login_logo.jpg';
import logo_small from '../../assets/logo_small.png';
import office_365_logo from '../../assets/office-365-icon.svg';

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
                <div className="left-container">
                    <div className='image-box'>
                        <img src={logo_img} width="350px" height="400px"></img>
                    </div>
                </div>
                <div className="right-container">
                    <div className='login-right'>
                        <div className='logo-small'>
                            <img style={{ width: 60, height: 61 }} src={logo_small} />
                        </div>
                        <div className="title col-4 mx-auto">
                            <h3>Đăng nhập</h3>
                        </div>

                        <div className="content-form col-4 mx-auto">
                            <div className="form-group">
                                <label>Email</label>
                                <input type={"email"} className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />

                            </div>
                            <div className="form-group">
                                <label>Mật khẩu</label>
                                <input type={"password"} className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className='forgot-password'>
                                Quên mật khẩu
                            </div>
                            <div className='login-box'>
                                <button className='btn-login col-4 mx-auto' onClick={handleClickBtnLogin}>
                                    <div className='text-login'>
                                        Đăng nhập
                                    </div>
                                </button>
                            </div>
                            <div className='text-option'>
                                <span>Hoặc</span>
                            </div>
                            <div className='father-office-365'>
                                <button className='office-365'>
                                    <img style={{ width: 24, height: 24 }} src={office_365_logo} className='svg-logo-365' />
                                    <div className='text-office'>
                                        Office 365
                                    </div>
                                </button>
                            </div>
                            <div className='option-dang-ki'>
                                <div className='text-none'>
                                    Chưa có tài khoản?
                                </div>
                                <div className='text-option-dang-ki'>Đăng ký</div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}
export default Login