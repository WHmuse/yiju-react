import React from 'react'
import './style.less'
export default function HomeTuijian(props) {
    return (
        <div className='tuijian'>
            <p className='tj-title'>新品推荐</p>
            <div className='tj-box'>
                {props.list.map(item=>(
                    <div className='tj-box-item' key={item.id}>
                    <img src={item.img} alt=""/>
                    <p>{item.title}</p>
                </div>
                ))}                
            </div>
        </div>
    )
}
