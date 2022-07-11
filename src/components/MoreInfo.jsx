import Button from './Button';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation} from 'swiper';
import '../App.css';
import { BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

const MoreInfo = ({links, width}) => {
  return (
    <div className="">
        {links.map((link)=>{
          return (
              <div className={`my-9 ${link.bgBg} rounded-xl mx-auto w-[90%] ${link.color}`} key={link.id} style={{backgroundImage: `url(${link.moreInfo.bgImg})`, backgroundSize: '430px', backgroundRepeat: 'no-repeat', backgroundPosition: 'top 150px right'}}>
                <div className="p-4">
                <div className={`mt-3 ${link.bg} flex rounded-2xl items-center w-auto w-fit p-2`}>{link.icon} <label className={`text-lg font-medium ml-2 ${link.color}`}>{link.title}</label></div>
                  <h4 className={`pt-4 text-xl font-semibold text-${link.moreInfo.theme}-700 md-780:text-4xl`}>{link.moreInfo.header}</h4>
                  </div>
				  {width < 780 && (link.moreInfo.details && <Swiper
                                        modules={[Navigation, Pagination]}
                                        slidesPerView={1}
                                        navigation={{prevEl: '.prev', nextEl: '.next'}}
                                        pagination={{
                                clickable: true,
                                         el: '.slider', type: 'bullets',
                                         bulletElement: 'span',
                                         bulletClass: `swiper-pagination-bullet ${link.theme}`,
                                         bulletActiveClass: `swiper-pagination-bullet-active` ,
                                         }}
                                        className="mySwiper slides p-3">
                                        { link.moreInfo.details && link.moreInfo.details.map((item) => {
                                          return (
                                            <SwiperSlide key={item.id}>
                                  <div className=" py-10 slides"><img src={item.img} style={{objectFit: 'contain', width: '90vw', height: '380px'}} alt="" /></div>
                                              <div>
                                                <h4 className="text-lg font-medium p-4">{item.info}</h4>
                                    {item.extraInfo && <p className='p-4 pt-2'>{item.extraInfo}</p>}
                                              </div>
                                            </SwiperSlide>
                                          )
                                        })}
                                <div className='flex p-4 items-center'>
                                <div className="flex justify-between w-28">
                                              <Button text={<BsArrowLeftShort size={30}/>} styles={`p-2  border rounded-md prev ${link.border}`} />
                                              <Button text={<BsArrowRightShort size={30}/>} styles={`next p-2  border rounded-md ${link.border}`} />
                                          </div>
                                          <div className="!w-28 !flex slider !ml-auto !justify-between"></div>
                                </div>
                                      </Swiper>) }
           { width >= 780 && <div className="p-2 pt-0">
             {link.moreInfo.details && link.moreInfo.details.map((item) => {
              return (
                <div className={`rounded-lg border m-4 p-3 ${link.moreInfo.border} ${link.bgBg} w-[430px]` }>
                  <h4 className="text-base font-semibold">{item.info}</h4>
                  {item.extraInfo && <p className="text-base">{item.extraInfo}</p>}
                </div>
                )
             })}
           </div>}
				  <div className="p-4" style={link.moreInfo.info && { backgroundImage: `url(${link.moreInfo.bgImg})`, objectFit: 'contain',  }}>
					 {link.moreInfo.info && <div className="pb-4" ><p className="text-md">{link.moreInfo.info}</p></div>}
					<Button text={link.moreInfo.btnText} styles={` p-4 ${link.theme} hover:brightness-75 rounded-lg text-white`}/>
				  </div>


              </div>
          )
        })}
    </div>
  )
}

export default MoreInfo
