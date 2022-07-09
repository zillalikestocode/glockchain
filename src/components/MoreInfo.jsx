import Button from './Button'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation} from 'swiper'
import '../App.css'
import { BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

const MoreInfo = ({links}) => {
  return (
    <div className="">
        {links.map((link)=>{
          return (
              <div className={`my-9 ${link.bgBg} rounded-xl mx-auto w-[90%] ${link.color}`} key={link.id}>
                <div className="p-3">
                <div className={`mt-3 ${link.bg} flex rounded-2xl items-center w-auto w-fit p-2`}>{link.icon} <label className={`text-lg font-medium ml-2 ${link.color}`}>{link.title}</label></div>
                  <h4 className={`p-3 text-xl font-semibold text-${link.moreInfo.theme}-700`}>{link.moreInfo.header}</h4>
                  </div>
                  <style>{`
                    
                  `}</style>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation={{prevEl: '.prev', nextEl: '.next'}}
                    pagination={{
                     el: '.slider', type: 'bullets', 
                     bulletElement: 'span', 
                     bulletClass: 'swiper-pagination-bullet', 
                     bulletActiveClass: `swiper-pagination-bullet-active` , 
                     renderBullet: function(index, className){ 
                       return `<span class="${className} !bg-${link.moreInfo.theme}-700"></span>`
                       }}}
                    className="mySwiper slides p-3"
                    style={{backgroundImage: `url(${link.moreInfo.bgImg})`}}>
                    { link.moreInfo.details && link.moreInfo.details.map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <div className=" py-10 slides"><img src={item.img} style={{objectFit: 'contain', width: '450px', height: '430px'}} alt="" /></div>
                          <div>
                            <h4 className="text-lg font-medium">{item.info}</h4>
                            {item.extraInfo && <p>{item.extraInfo}</p>}
                          </div>
                        </SwiperSlide>
                      )
                    })}
					  <div className='flex p-3 items-center'>
						<div className="flex">
                      		<Button text={<BsArrowLeftShort size={30}/>} styles={`p-2  border rounded-md prev border-${link.moreInfo.theme}-700`} />
                      		<Button text={<BsArrowRightShort size={30}/>} styles={`next p-2  border rounded-md border-${link.moreInfo.theme}-700`} />
                    	</div>
                    	<div className=" slider ml-auto"></div>
					  </div>
                    
                  </Swiper>
              </div>
          )
        })}
    </div>
  )
}

export default MoreInfo
