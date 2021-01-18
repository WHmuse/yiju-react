import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            您访问的页面不存在，请 <Link to='/'>返回首页</Link>
        </div>
    )
}
