import React from 'react'
import './Header.less'
import {withRouter} from 'react-router-dom'
function Header(props) {
    return (
        <div className='header'>
            <i className='iconfont icon-fanhui fanhui' onClick={()=>props.history.goBack()}></i>
            {/* <span>{props.title}</span> */}
            <div className='header-content'>
                {props.children}
            </div>
            <i className='header-kong'></i>
        </div>
    )
}
export default withRouter(Header)