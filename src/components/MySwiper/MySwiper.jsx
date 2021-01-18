import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination,Autoplay ,A11y} from 'swiper'
// 引入swiper的css
import 'swiper/swiper-bundle.min.css'

Autoplay.params.autoplay.delay = 5000
SwiperCore.use([Pagination,Autoplay , A11y]);
// console.log(Autoplay)

export default function MySwiper(props) {
    return (
        <div className='myswiper'>
            <Swiper
                loop={true}
                pagination={{ clickable: true }}
                autoplay = {true}
                style={{ height: '210px', width: '100%' }}
            >
                {
                    props.list.map(item=><SwiperSlide key={item.id}>
                        <img src={item.url} alt="" style={{width:'100%'}}/>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}
MySwiper.defaultProps = {
    list:[]
}