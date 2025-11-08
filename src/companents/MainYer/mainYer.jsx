import "./mainYer.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainYer = () => {
    return (
        <section className="main-yer">
            <div className="container">
                <h2 className="yer-title">#YellowKitchens <span>in Instagram</span></h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    className="yer-swiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="yer-slide">
                            <img src="./public/Rectangle 10.svg" alt="Chef" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="yer-slide">
                            <img src="./public/Rectangle 11.svg" alt="Chefs" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="yer-slide">
                            <img src="./public/Rectangle 12.svg" alt="Chef" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="yer-slide">
                            <img src="./public/Rectangle 13.svg" alt="Fresh" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="yer-slide">
                            <img src="./public/Rectangle 11.svg" alt="Fresh" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default MainYer;