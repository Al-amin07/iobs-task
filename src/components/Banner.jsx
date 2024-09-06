
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../assets/b1.webp'
import img2 from '../assets/b2.jpg'
import img3 from '../assets/b3.jpg'
import img4 from '../assets/b4.jpg'
import img5 from '../assets/b5.jpg'

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper h-[600px]"
      >
        <SwiperSlide>
            <div>
                <img src={img4} className='w-full h-full' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img5} className='w-full h-full' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={img3} className='w-full h-full' alt="" />
            </div>
        </SwiperSlide>
      
       
      </Swiper>
    </>
  );
}
