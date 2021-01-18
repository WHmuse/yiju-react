import React,{useState,useEffect,useRef} from 'react'
import Header from '../../components/Header/Header'
import {connect} from 'react-redux'
import {baseUrl,shopcarlist} from '../../api/api'
import './Shopcar.less'

function Shopcar(props) {
    // let myref = React.createRef();
    // let myref = useRef()
    let [list,setList] = useState([]);
    let [open,setOpen] = useState(false);
    let [curid,setCurid] = useState('');
    let [content,setContent] = useState('')
    let [star,setStar] = useState(-1)
    useEffect(() => {
        fetch(baseUrl+shopcarlist+'?user='+props.user)
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            setList(data.list);
        })
    }, []);

    // 显示评论区域
    function openarea(id,iscomment){
        // 已评论的不显示评论区域
        if(!iscomment){
            setCurid(id);
            setOpen(true)
        }   
    }

    // 提交事件
    function tijiao(id){
        console.log(content);
        // 关闭评论区域
        setOpen(false);
        // 显示已评论
        for(let i=0; i<list.length; i++){
            if(list[i].id == id){
                list[i].iscomment = true;
            }
        }
        // 把content的内容置为空
        setContent('');
        alert('提交成功');
    }

    function quxiao(){
        setOpen(false)
    }

    // 点亮星星
    function lightstar(index){
        setStar(index)
    }

    return (
        <div>
            <Header>
                <span>购物车</span>
            </Header>
            <div>
                <p>用户名：{props.user}</p>
                <p>城市：{props.city}</p>
            </div>
            <div className='shopcar-list'>
                {list.map(item=>(
                    <div key={item.id}>
                        <div className='item'>
                            <div className='pic'>
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="info">
                                <p>商户:{item.title}</p>
                                <p>类型:{item.huxing} - {item.area}</p>
                                <p>价钱:{item.price}</p>
                            </div>
                            <div className='btns'>
                                <span 
                                style={{'background':item.iscomment?'#999999':'#ff5555'}}
                                    onClick={openarea.bind(null,item.id,item.iscomment)}
                                >{item.iscomment?'已评论' :'评论'}</span>
                            </div>
                        </div>
                        {/* 评论区域，默认是隐藏的 */}
                        <div className='plarea' style={{'display':open && curid==item.id ? 'block' :"none" }}>
                            <div><textarea className='mytextarea' value={content}
                                onChange={(e)=>setContent(e.target.value)}
                            ></textarea></div>
                            <div>{[1,2,3,4,5].map((item,index)=>(
                                <i 
                                    key={item} 
                                    className='iconfont icon-xingxing'
                                    style={{color: index <= star ? 'red':'black'}} //星星变亮的条件
                                    onClick={lightstar.bind(null,index)}
                                ></i>   
                            ))}</div>
                            <div><button onClick={tijiao.bind(null,item.id)}>提交</button><button onClick={quxiao}>取消</button></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default connect(state=>({
    city:state.city,
    user:state.user
}))(Shopcar)