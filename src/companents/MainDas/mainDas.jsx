import "./mainDas.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainDas = () => {
    const categories = [
        {
            img: "/img/bagel.svg",

            label: "Bagel"
        },
        {
            img: "/img/Vector.svg",
            label: "Burger"
        },
        {
            img: "/img/chicken.svg",

            label: "Chicken"
        },
        {
            img: "/img/fish.svg",
            label: "Fish"
        },
        {
            img: "/img/fishnchips.svg",
            label: "Fish & Chips"
        },
        {
            img: "/img/Vector1.svg",
            label: "Salads"
        },
        {
            img: "/img/pizza.svg",
            label: "Pizza"
        },
        {
            img: "/img/Vector2.svg",
            label: "Pasta"
        },
        {
            img: "/img/Vector1.svg",
            label: "Soup"
        },
        {
            img: "/img/pizza.svg",

            label: "Steak"
        },
    ];

    return (
        <main>
            <div className="mainDas container">
                <div className="main1">
                    <h1>Specialities</h1>
                    <button>Show All</button>
                </div>

                <Swiper
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 7 },
                        1280: { slidesPerView: 8 },
                    }}
                    className="categories-swiper"
                >
                    {categories.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="main2">
                                <img src={item.img} alt={item.label} />
                                <p>{item.label}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
    );
};

export default MainDas;
