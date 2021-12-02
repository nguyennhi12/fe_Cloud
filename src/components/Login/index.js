import React, { useState }  from "react";
import "./Login.css";
import {useNavigate } from "react-router-dom";
import Account from "../../config/Account"
import Notification from "../Notification/Notification";
function Login() {
  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate()
  async function onClick(){
    console.log(username,password);
    var account ={username,password}    
    var result= await Account.login(account)
    console.log(result)
    if(result.statusCode==200){
      localStorage.setItem("user",JSON.stringify(result.data))
      navigate('/register')
    }else{
      setNotify({
        isOpen: true,
        message: result.message,
        type: "error",
      });
    }

    
  }
  const changeUsername = (e) => {
   setusername(e.target.value);
  };

  const changePassword = (e) => {
    setpassword(e.target.value);
  };


  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-title">Đăng nhập</div>
        <div className="form-group">
          <input
            type="text"
            style={{marginTop:'5%'}}
            class="form-control"
            placeholder="Tài khoản"
            required
            onChange={changeUsername}
          />
          <input
          style={{marginTop:'5%'}}
            type="password"
            class="form-control"
            placeholder="Mật khẩu"
            required
            onChange={changePassword}
          />
          {/* <Link to='./register'> */}
          <button className="login-btn" onClick={onClick}>
            Đăng nhập
          </button>
          {/* </Link> */}
        </div>
       
       
        <div className="login-other">
         
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}

export default Login;
