import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./main.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Main = () => {
    return (
        <main>
            <div className="main container">
                <div className="main1">
                    <h1>Restaurants</h1>
                    <button>show all</button>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="main2">
                            <img src="./public/Photo-base.svg" alt="Restaurant" />
                            <div></div>
                            <img src="./public/Group%2029.svg" alt="img" className="bir" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="./public/Photo-base1.svg" alt="Restaurant" />
                            <div></div>
                            <img src="./public/Union.svg" alt="img" className="bir" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="./public/Photo-base2.svg" alt="Restaurant" />
                            <div></div>
                            <img src="./public/Union1.svg" alt="img" className="bir" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="./public/Photo-base2 (2).svg" alt="Restaurant" />
                            <div></div>
                            <img src="./public/Union3.svg" alt="img"  className="bir"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
    );
};

export default Main;
