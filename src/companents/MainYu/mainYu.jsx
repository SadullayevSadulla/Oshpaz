import "./mainYu.css";
import { useEffect, useRef } from "react";

const MainYu = () => {
    const sectionRef = useRef(null);
    const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

    useEffect(() => {
        const onScroll = () => {
            lastScrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const scrollingDown = window.scrollY >= lastScrollY.current;
                    lastScrollY.current = window.scrollY;

                    if (entry.isIntersecting && scrollingDown) {
                        const elements = entry.target.getElementsByClassName('main_yu1');
                        Array.from(elements).forEach((element) => {
                            element.classList.add('animate');
                        });
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -10% 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="mainYu-section" ref={sectionRef}>
            <div className="main_yu container">
                <div className="main_yu1">
                    <div className="main_your">1</div>
                    <p>Kitchen</p>
                </div>
                <div className="main_yu1">
                    <div className="main_your">11</div>
                    <p>specialties</p>
                </div>
                <div className="main_yu1">
                    <div className="main_your">11</div>
                    <p>restaurants</p>
                </div>
                <div className="main_yu1">
                    <div className="main_your">1</div>
                    <p>transport costs</p>
                </div>
            </div>
        </section>
    )
}
export default MainYu;