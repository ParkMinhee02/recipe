import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Main = () => {
	return (
		<div className='mainSlider'>
			<Swiper modules={[Navigation, Pagination, Autoplay]} className='sliders'
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{ clickable: true }}
				navigation={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
			<SwiperSlide className='slider'><img src={process.env.PUBLIC_URL+"/img/slider01.jpg"} alt="" /></SwiperSlide>
			<SwiperSlide className='slider'><img src={process.env.PUBLIC_URL+"/img/slider02.jpg"} alt="" /></SwiperSlide>
			<SwiperSlide className='slider'><img src={process.env.PUBLIC_URL+"/img/slider03.jpg"} alt="" /></SwiperSlide>
			...
			</Swiper>
		</div>
	);
};

export default Main;