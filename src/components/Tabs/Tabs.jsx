import React, { Component } from 'react'
import './Tabs.less'

export default class Tabs extends Component {
    state ={
        curKey:''
    }
    componentDidMount(){
        this.setState({
            curKey:this.props.defaultActiveKey
        })
    }
    changeKey(key){
        this.setState({
            curKey:key
        })
        this.props.onChange(key)
    }
    render() {
        console.log(this.props)
        return (
            <div className='tabs'>
                <div className='tabs-title'>
                    {this.props.children.map(item=>(
                        // 要有高亮显示效果
                        <div 
                            key={item.key} 
                            className={ this.state.curKey=== item.key ?'active':''}
                            onClick={this.changeKey.bind(this,item.key)}
                        >{item.props.tab}</div>
                    ))}
                </div>
                <div className='tabs-content'>
                    {this.props.children.map(item=>(
                        <div
                            key={item.key}
                            style={{display:  this.state.curKey === item.key ? 'block':'none' }}
                        >{item.props.children}</div>
                    ))}
                </div>
            </div>
        )
    }
}


Tabs.TabPane=function(){
    
}





/**
 * 直接获取 this.props.children 的结果
 * <div>
 *      <div tab="Tab 1" key="1">
            Content of Tab Pane 1
        </div>
        <div tab="Tab 2" key="2">
            Content of Tab Pane 2
        </div>
 * </div>
 * 
 */

/**
 * 最终效果
 * <div>
        <div>
            <div>Tab 1</div>
            <div>Tab 2</div>
        </div>
        <div>
            <div>Content of Tab Pane 1</div>
            <div>Content of Tab Pane 2</div>
        </div>
    </div> 
 * 
 */
