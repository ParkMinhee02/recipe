import React,{useContext, useState} from 'react';
import {DataContext} from '../App';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import List from '../components/List';
import Main from '../components/Main';
import { GiCook } from "react-icons/gi";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
	const {data} = useContext(DataContext);
	const [swiper, setSwiper] = useState(null);
	const [swiper1, setSwiper1] = useState(null);

	const handlePrev = () => {
		swiper?.slidePrev()
	}
	const handleNext = () => {
	  swiper?.slideNext()
	}
	const handlePrev1 = () => {
		swiper1?.slidePrev()
	}
	const handleNext1 = () => {
	  swiper1?.slideNext()
	}

	/* if(loading){
    	return <h1 className='loading'>데이터 로드 중입니다.</h1>
	} */

   /* const categories=[...new Set(data.map((data) => data.RCP_PAT2))]; */
	if(!data) {
		return null;
	}

   return (
		<div className='home'>
			<Main />
			<div className='inner'>
				{/* {
					categories.map((category)=>(
						<Fragment key={category}>
							<Title title={category}/>
							<List data={data.filter((item)=> item.RCP_PAT2 === category)}/>
						</Fragment>
					))
				} */}
				<div className="logo">
					<Link to='/'><GiCook /></Link>
				</div>
				<div className="title">
					<h2>추천레시피</h2>
				</div>
				<div className="homeList">
					<Swiper
						modules={[Navigation]}
						spaceBetween={50}
						slidesPerView={3}
						onSwiper={(e) => {setSwiper(e)}}
					>
						{data.slice(0, 10).map((item) => (
							<SwiperSlide key={item.id}><List data={[item]}/></SwiperSlide>
						))}
					</Swiper>
					<div className="swiper_btn">
						<div className="swiperPrevBtn" onClick={handlePrev}><GrPrevious /></div>
						<div className="swiperNextBtn" onClick={handleNext}><GrNext /></div>
					</div>
				</div>

				<div className="title">
					<h2>인기레시피</h2>
				</div>
				<div className="homeList">
					<Swiper
						modules={[Navigation]}
						spaceBetween={50}
						slidesPerView={3}
						onSwiper={(e) => {setSwiper1(e)}}
					>
						{data.slice(11, 20).map((item) => (
							<SwiperSlide key={item.id}><List data={[item]}/></SwiperSlide>
						))}
					</Swiper>
					<div className="swiper_btn">
						<div className="swiperPrevBtn" onClick={handlePrev1}><GrPrevious /></div>
						<div className="swiperNextBtn" onClick={handleNext1}><GrNext /></div>
					</div>
				</div>
			</div>
		</div>
   );
};

export default Home;