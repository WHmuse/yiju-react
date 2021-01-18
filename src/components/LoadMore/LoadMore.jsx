import React,{ useRef ,useEffect , useState} from 'react'

export default function LoadMore(props) {
    let myRef = useRef();
    let flag = true;
   
    useEffect(()=>{
        // 可视窗口
        let cliHeight = document.documentElement.clientHeight;
        function scroFn(){
            // 元素距离页面顶部高
            let offHeight = myRef.current.offsetTop;
            // 滚动高度
            let scroHeight = document.documentElement.scrollTop;
            if((scroHeight + cliHeight >= offHeight) && flag){
                flag = false;
                console.log('到底了，该加载新数据了')
                // 接收用户要执行的功能
                props.getdata()   
            }
        }
        window.addEventListener('scroll',scroFn);
        return ()=>{
            // 组件销毁时删除全局事件
            window.removeEventListener('scroll',scroFn)
        }
    })
    return (
        <div ref={myRef}>
            加载更多
        </div>
    )
}
