import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import MySwiper from '../../components/MySwiper/MySwiper'
import {baseUrl,detailsBanners,house,comment} from '../../api/api'
import Tabs from '../../components/Tabs/Tabs'
import {formatTel} from '../../utils/formatTel'
import LoadMore from '../../components/LoadMore/LoadMore'
import './Details.less'
import {connect} from 'react-redux'

let {TabPane} = Tabs;


class Details extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            defaultActiveKey:'1',
            houseInfo:{},
            page:0,
            commentlist:[],
            iscollect:false
        }
    }
    componentDidMount(){
        fetch(baseUrl+detailsBanners+'?id='+this.props.match.params.id)
        .then(data=>data.json())
        .then(data=>{
            let newList = [];
            for(let i=0; i< data.list.length; i++){
                let tempobj ={}
                tempobj.id = i;
                tempobj.url = data.list[i]
                newList.push(tempobj)
            }
            this.setState({
                list:newList
            })
        })

        // 请求房屋信息
        fetch(baseUrl+house+"?id="+this.props.match.params.id)
        .then(data=>data.json())
        .then(data=>{
            console.log(data);
            this.setState({
                houseInfo:data
            })
        });

        // 评价信息
       this.getdata()

        // 进入页面，显示收藏状态
        let collection = localStorage.getItem('sc-collection'); 
        // 判断是否存在  
        if(collection){
            // 存在就解析
            collection = JSON.parse(collection);
        }else{
            // 不存在就创建
            collection = {}
        }
        // 判断是否收藏过
        if(collection[this.props.match.params.id]){
            // 收藏过
            this.setState({
                iscollect:true
            })
        }
        // else{
        //     // 没收藏过
        //     this.setState({
        //         iscollect:false
        //     })
        // }
    }
    getdata=()=>{
        fetch(baseUrl+comment+"?id="+this.props.match.params.id+'&page='+this.state.page)
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            this.setState({
                commentlist:[...this.state.commentlist,...data.list],
                page:this.state.page + 1
            })
        })
    }

    callback = (key)=>{
        console.log(key)
    }

    // 收藏功能
    shoucang =() =>{
        if(this.props.user){
            // 登录过
            // 重新获取localStorage
            let collection = localStorage.getItem('sc-collection'); 
             // 判断是否存在  
            if(collection){
                // 存在就解析
                collection = JSON.parse(collection);
            }else{
                // 不存在就创建
                collection = {}
            }
            if(this.state.iscollect){
                // 已收藏过，需要取消收藏
                let result = window.confirm('是否要取消这条收藏');
                console.log(result)
                if(result){
                    delete collection[this.props.match.params.id];
                    this.setState({
                        iscollect:false
                    })
                }
            }else{
                // 没有收藏过
                collection[this.props.match.params.id] = true;
                this.setState({
                    iscollect:true
                })
            }
            // 重新存储到本地
            localStorage.setItem('sc-collection',JSON.stringify(collection));
        }else{
            // 没登录
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div className='details'>
                {/* 头部 */}
                <Header>
                    <span>详情页</span>
                </Header>
                {/* 轮播图 */}
                <MySwiper list={this.state.list} />
                {/* tabs */}
                <Tabs defaultActiveKey="2" onChange={this.callback}>
                    <TabPane tab="房屋信息" key="1">
                        <div>
                            <p>{this.state.houseInfo.title}</p>
                        </div>
                        <div>
                            <div>
                                <p>{this.state.houseInfo.price}</p>
                                <p>价钱</p>
                            </div>
                            <div>
                                <p>{this.state.houseInfo.huxing}</p>
                                <p>户型</p>
                            </div>
                            <div>
                                <p>{this.state.houseInfo.area}</p>
                                <p>面积</p>
                            </div>
                        </div>
                        <div>
                            <p>朝向：{this.state.houseInfo.chaoxiang}</p>
                            <p>层数：{this.state.houseInfo.floorStr}</p>
                            <p>装修：{this.state.houseInfo.zhuangxiu}</p>
                            <p>年份：{this.state.houseInfo.year}</p>
                        </div>
                    </TabPane>
                    <TabPane tab="评价信息" key="2">
                        {this.state.commentlist.map(item=>(
                            <div key={item.id}>
                                <p>
                                    <i className='iconfont icon-wode'></i>
                                    <span>{formatTel(item.tel)}</span>   
                                </p>
                                <p>
                                    {[1,2,3,4,5].map((xx,index)=>(
                                        <i key={xx} 
                                            className='iconfont icon-xingxing'
                                            style={{color: item.star > index?  'red':'black'}}
                                        ></i>   
                                    ))}
                                </p>
                                <p>{item.content}</p>
                            </div>
                        ))}
                        <LoadMore getdata={this.getdata} />
                    </TabPane>
                   
                </Tabs>
                <div className='details-btns'>
                    <button className='shoucang' onClick={this.shoucang}> { this.state.iscollect ? '已收藏':'收藏'}</button>
                    <button>购买</button>
                </div>
            </div>
        )
    }
}


export default connect(state=>({user:state.user}))(Details)