import React,{useState} from 'react'
import './Login.less'
import {connect} from 'react-redux'
function Login(props) {
    let [username,setUsername] = useState('')
    function login(){
        // console.log('username:'+username)
        // 存储到redux,存储到localStorage
        props.adduser(username);
        localStorage.setItem('yiju-user',username);
        // 返回上一层页面
        props.history.goBack();
    }
    return (
        <div className='login'>
            <div className='username-box input-box'>
                <i className='iconfont icon-ai-phone myicon'></i>
                <input type="text" 
                  className='username'
                  placeholder='请输入用户名'
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div className='password-box input-box'>
                <i className='iconfont icon-mima myicon'></i>
                <input type="text" placeholder='请输入验证码' />
                <button className='btn'>发送验证码</button>
            </div>
            <div className='login-btn' onClick={login}>登 录</div>
        </div>
    )
}


export default connect(null,dispatch=>({
    adduser:(data)=>dispatch({
        type:'ADDUSER',
        payload:data
    })
}))(Login)