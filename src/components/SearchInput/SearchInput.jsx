import React,{useRef , useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import './SearchInput.less'

function SearchInput(props) {
    // 创建ref
    let myRef = useRef();
    // console.log(props)
    // 渲染成功和更新两个阶段都需要处理显示搜索的关键字
    useEffect(()=>{
        if(props.match.params.keyword){
            myRef.current.value = props.match.params.keyword;
        }
    },[props.match.params.keyword])
    
    function toList(e){
        if(e.keyCode === 13){
            // 获取用户输入的内容
            let k = myRef.current.value;
            // 按到回车键了，要跳转页面
            props.history.push('/searchlist/'+k);
        }
    }
    return (
        <div className='search-input-box' style={{'borderRadius':props.type ==='round'? '4px' : '20px'}}>
            <i className='iconfont icon-sousuo search-icon' ></i>
            <input 
                type="text" 
                className='search-input' 
                placeholder='请输入要搜索的关键字'
                ref={myRef}
                onKeyUp={toList} 
            />
        </div>
    )
}

// props默认值
SearchInput.defaultProps={
    type:'round'
}

export default withRouter(SearchInput)