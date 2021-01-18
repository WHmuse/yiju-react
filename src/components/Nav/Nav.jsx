import React from 'react'
// 引入具有高亮显示的导航组件NavLink
import { NavLink } from 'react-router-dom'
import './Nav.less'

export default function Nav() {
    return (
        <div className='yiyu-nav'>
            <div className='nav-item'>
                <NavLink to='/' exact={true}>
                    <p><i className='iconfont icon-index tb'></i></p>
                    <p>首页</p>
                </NavLink>
            </div>
            <div className='nav-item'>
                <NavLink to='/shop' exact={true}>
                    <p><i className='iconfont icon-shangcheng tb shop'></i></p>
                    <p>商城</p>
                </NavLink>
            </div>
            <div className='nav-item'>
                <NavLink to='/life' exact={true}>
                    <p><i className='iconfont icon-jiangbei tb'></i></p>
                    <p>生活服务</p>
                </NavLink>
            </div>
            <div className='nav-item'>
                <NavLink to='/mine' exact={true}>
                    <p><i className='iconfont icon-wode1 tb'></i></p>
                    <p>我的</p>
                </NavLink>
            </div>
        </div>
    )
}
