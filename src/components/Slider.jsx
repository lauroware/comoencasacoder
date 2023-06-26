import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/slider.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const setArrows = () => {
	const myArrowNext = document.querySelectorAll('.swiper-button-next');
	const myArrowPrev = document.querySelectorAll('.swiper-button-prev');
	console.log(myArrowNext);
	myArrowNext.forEach((ArrowNext) => {
		ArrowNext.style.marginRight = '10%';
		ArrowNext.style.backgroundColor = '#4f2d24';
		ArrowNext.style.height = '60px';
		ArrowNext.style.width = '60px';
		ArrowNext.style.borderRadius = '50%';
		ArrowNext.style.justifyContent = 'center';
		ArrowNext.style.alignItems = 'center';
		ArrowNext.style.color = 'white';
		ArrowNext.style.fontWeight = 'bold';
		ArrowNext.style.fontSize = '2px';
	});

	myArrowPrev.forEach((ArrowPrev) => {
		ArrowPrev.style.marginLeft = '10%';
		ArrowPrev.style.backgroundColor = '#4f2d24';
		ArrowPrev.style.height = '60px';
		ArrowPrev.style.width = '60px';
		ArrowPrev.style.borderRadius = '50%';
		ArrowPrev.style.justifyContent = 'center';
		ArrowPrev.style.alignItems = 'center';
		ArrowPrev.style.color = 'white';
		ArrowPrev.style.fontWeight = 'bold';
	});
};

const Slider = ({ images }) => {
	useEffect(() => {
		setArrows();
	}, []);

	return (
		<div className="container">
			<Swiper
				initialSlide={0}
				slideShadows={true}
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 0,
					stretch: 10,
					depth: 100,
					modifier: 2.5,
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					clickable: true,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="swiper_container"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img src={image} alt="" />
					</SwiperSlide>
				))}
				<div className="slider-controler">
					<div className="swiper-pagination"></div>
				</div>

				<div className="swiper-button-prev slider-arrow"></div>
				<div className="swiper-button-next slider-arrow"></div>
			</Swiper>
		</div>
	);
};

export default Slider;
