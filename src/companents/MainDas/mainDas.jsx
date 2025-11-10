import "./mainDas.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainDas = () => {
    return (
        <main>
            <div className="mainDas main container">
                <div className="main1">
                    <h1>Specialities</h1>
                    <button>show all</button>
                </div>
                <Swiper
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        480: { slidesPerView: 4 },
                        768: { slidesPerView: 6 },
                        1024: { slidesPerView: 8 },
                    }}
                    className="mySwiper categories-swiper"
                >
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/img/bagel.svg" alt="Restaurant" />
                            <div></div>
                            <p>Bagel</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/img/Vector.svg" alt="Restaurant" />
                            <div></div>
                            <p>Burger</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/img/chicken.svg" alt="Restaurant" />
                            <div></div>
                            <p>Chicken</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/img/fish.svg" alt="Restaurant" />
                            <div></div>
                            <p>Fish</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/img/fishnchips.svg" alt="Restaurant" />
                            <div></div>
                            <p>Fish'Chips</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/public/Vector1.svg" alt="Restaurant" />
                            <div></div>
                            <p>Salads</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/img/pizza.svg" alt="Restaurant" />
                            <div></div>
                            <p>Pizza</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/public/Vector2.svg" alt="Restaurant" />
                            <div></div>
                            <p>Pasta</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/public/pizza.svg" alt="Restaurant" />
                            <div></div>
                            <p>Pasta</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/public/Vector2.svg" alt="Restaurant" />
                            <div></div>
                            <p>Pasta</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/public/Vector1.svg" alt="Restaurant" />
                            <div></div>
                            <p>Pasta</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="main2">
                            <img src="/public/pizza.svg" alt="Restaurant" />
                            <div></div>
                            <p>Pasta</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
    );
};

export default MainDas;