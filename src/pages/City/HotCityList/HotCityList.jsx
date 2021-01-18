import React,{useState,useEffect} from 'react'
import './HotCityList.less'
import {baseUrl,hotcity} from '../../../api/api'


export default function HotCityList(props) {
    let [list,setList] = useState([]);

    useEffect(()=>{
        fetch(baseUrl+hotcity)
        .then(data=>data.json())
        .then(data=>{
            setList(data.list)
        })
    },[])

    // 选择城市的函数
    function selectCity(city){
        // 点击城市后要存储起来
        // redux , localStorage
        localStorage.setItem('yiju-city',city);
        // 调用updateCity方法
        props.updateCity(city)
        // 原生返回功能
        window.history.back()
    }

    return (
        <div className='hotcitylist'>
            <p className='title'>热门城市</p>
            <ul className='list'>
    {list.map(item=><li key={item.id} className="item" onClick={selectCity.bind(null,item.city)}><span>{item.city}</span></li>)}
               
            </ul>
        </div>
    )
}
