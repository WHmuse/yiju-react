import React, { Component } from 'react'
import './HomeHeader.less';
import {connect} from 'react-redux'
import SearchInput from '../../../components/SearchInput/SearchInput';

class HomeHeader extends Component {
    toHotCity(){
        // 页面跳转
        this.props.history.push('/city')
    }
    // 跳转到购物车页面
    toShopcar(){
        if(this.props.user){
            this.props.history.push('/shopcar')
        }else{
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div className='home-header'>
                <div className='city' onClick={this.toHotCity.bind(this)}>
                    <span>{this.props.city}</span>
                    <i className='iconfont icon-xialajiantou'></i>
                </div>
                <div className='search'>
                    {/* type 有两个可选值，round 小圆角效果(默认值) cricle 大圆角效果 */}
                    <SearchInput />
                </div>
                <div className='shopcar' onClick={this.toShopcar.bind(this)}>
                    <i className='iconfont icon-gouwucheman'></i>
                </div>
            </div>
        )
    }
}

export default connect((state)=>({city:state.city,user:state.user}))(HomeHeader)
