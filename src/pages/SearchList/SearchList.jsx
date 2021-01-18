import React,{useState,useEffect} from 'react'
import Header from '../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'
import {baseUrl,searchlist} from '../../api/api'
import {connect} from 'react-redux'
import './SearchList.less'
import LoadMore from '../../components/LoadMore/LoadMore'

function SearchList(props) {
    let [list,setList] = useState([]);
    let [page,setPage] = useState(0);
    function getdata(){
        fetch(baseUrl+searchlist+'?city='+props.city+'&keyword='+props.match.params.keyword+'&page='+page)
        .then(data=>data.json())
        .then(data=>{
            if(data.code === 1){
                // setList(data.list)
                setList([...list,...data.list])
                setPage(page+1)
            }
        })
    }
    useEffect(()=>{
        // 初始化
        list = [];
        page = 0;
        getdata();
    },[props.match.params.keyword]); // 要依赖搜索的关键字
    return (
        <div>
            {/* 头部 */}
            <Header>
                <SearchInput type='cricle' />
            </Header>
            {/* 渲染列表 */}
            <ul>
                {list.map(item=>(
                    <li onClick={()=>props.history.push('/details/'+item.id)} //点击事件，点击时跳转到详情页
                     key={item.id} className='search-list-item'>
                        <div className='pic'>
                            <img src={item.img} alt=""/>
                        </div>
                        <div className='content'>
                            <div className='content-left'>
                                <p>{item.title}</p>
                                <p><span>{item.floorStr} | </span><span>{item.huxing} | </span><span>{item.area}</span></p>
                            </div>
                            <div className='content-right'>
                                <p>{item.cztype}</p>
                                {/* item.price -> <h3>1234/月</h3> */}
                                <p dangerouslySetInnerHTML={{__html:item.price}}></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {/* 加载更多容器 */}
            <LoadMore getdata={getdata} />
        </div>
    )
}


export default connect(state=>({city:state.city}))(SearchList)