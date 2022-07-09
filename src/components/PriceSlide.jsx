import React, {useState, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'
import { FreeMode, Scrollbar} from 'swiper'
import Price from './Price'


const PriceSlide = ({ coins}) => {
  return (
    <div className="translate-y-[-50px]">
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      scrollbar={{ draggable: true}}
      freeMode={true}
      modules={[FreeMode, Scrollbar]}
      className="mySwiper w-full">
        { coins.map((coin) => {
          return (
            <SwiperSlide key={coin.id} className="price">
              <Price coin={coin} key={coin.id}/>
            </SwiperSlide>
          )
        })}
    </Swiper>
  </div>
  )
}

export default PriceSlide
