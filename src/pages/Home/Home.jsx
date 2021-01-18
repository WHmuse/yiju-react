import React from 'react'
import MySwiper from '../../components/MySwiper/MySwiper'
import Nav from '../../components/Nav/Nav'
import HomeHeader from './HomeHeader/HomeHeader'
import { useState ,useEffect} from 'react' 
import HomeTuijian from './HomeTuijian/HomeTuijian'

import {baseUrl,banners,newsTj,hotTj} from '../../api/api'

export default function Home(props) {
    let [list ,setList] = useState([]);
    let [newsList ,setNewsList] = useState([]);
    let [hotList ,setHotList] = useState([]);
    useEffect(() => {
        // 请求轮播图
        fetch(baseUrl+banners)
        .then(data=>data.json())
        .then(data=>{
            setList(data.list)
        })

        // 请求新品推荐数据
        fetch(baseUrl+newsTj+'?city=上海')
        .then(data=>data.json())
        .then(data=>{
            setNewsList(data.list)
        })


        // 请求热门推荐数据
        fetch(baseUrl+hotTj+'?city=上海')
        .then(data=>data.json())
        .then(data=>{
            setHotList(data.list)
        })


        // 创建原生ajax
        let xhr = new XMLHttpRequest()
        xhr.open('get','http://localhost:1234/list');
        xhr.send()
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    console.log(JSON.parse(xhr.responseText))
                }
            }
        }
    }, []);
    return (
        <div style={{paddingBottom:'55px'}}>
            <HomeHeader history={props.history} />
            {/* 轮播图 */}
            <MySwiper list={list} />
            {/* 新品推荐 */}
            <HomeTuijian list={newsList} />
            {/* 热门推荐 */}
            <HomeTuijian list={hotList} />
            <Nav />
        </div>
    )
}
