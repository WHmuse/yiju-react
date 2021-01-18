import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import HotCityList from './HotCityList/HotCityList'
import './City.less'

import {connect} from 'react-redux';

class City extends Component {
    render() {
        return (
            <div>
                {/* 头部 */}
                <Header>
                    <span> 热门城市选择 </span>
                </Header>
                {/* 当前城市 */}
                <div className='curcity'>
                    <p>当前城市：{this.props.curcity}</p>
                </div>
                {/* 热门城市 */}
                <HotCityList updateCity={this.props.updateCity} />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        curcity:state.city
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateCity:(data)=>dispatch({
            type:'UPDATECITY',
            payload:data
        })
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(City)