import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='text-center space-y-2'>
                {/* <h4 className='text-yellow-400 font-semibold text-xl'>---From 11:00am to 10:00pm---</h4>
                <div className='h-[2px] bg-slate-300 w-2/6 mx-auto'></div>
                <h2 className='text-3xl '>ORDER ONLINE</h2> */}
                <SectionTitle subtitle={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'}>
                    
                </SectionTitle>
            </div>
             <Swiper
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-8"
      >
        <SwiperSlide className='relative '><img src={slider1} alt="" />
            <h1 className='text-xl absolute bottom-10 left-1/3 text-white font-bold '>SALADS</h1>
        </SwiperSlide>

        <SwiperSlide><img src={slider2} alt="" />
            <h1 className='text-center -mt-16 text-white text-xl font-bold '>PIZZAS</h1>
        </SwiperSlide>

        <SwiperSlide><img src={slider3} alt="" />
        <h1 className='text-center -mt-16 text-white text-xl font-bold '>SOUP</h1></SwiperSlide>

        <SwiperSlide><img src={slider4} alt="" />  <h1 className='text-center -mt-16 text-white text-xl font-bold '>DESERTS</h1></SwiperSlide>
        <SwiperSlide><img src={slider5} alt="" />  <h1 className='text-center -mt-16 text-white text-xl font-bold '>DESERTS</h1></SwiperSlide>

       
      
      
      
      </Swiper>
        </div>
    );
};

export default Category;