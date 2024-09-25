import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "../../styles/componentStyle/slider.scss";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { SliderProps } from "./ISlider";


const Slider: React.FC<SliderProps> = ({data, activeCategory}) => {
    const swiperRef = useRef<SwiperType>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [paginationEnabled, setPaginationEnabled] = useState(false);

    const handleSlideChange = (swiper: SwiperType) => {
        setCurrentIndex(swiper.realIndex);
    };

    const updatePaginationVisibility = () => {
        setPaginationEnabled(window.innerWidth <= 768);
    };

    useEffect(() => {
        updatePaginationVisibility();
        window.addEventListener('resize', updatePaginationVisibility);
        return () => {
            window.removeEventListener('resize', updatePaginationVisibility);
        };
    }, []);

    return (
        <div className="slider">
            {currentIndex > 0 && (
                <button
                    className="slider-butt"
                    onClick={() => {
                        swiperRef.current?.slidePrev();
                    }}
                >
                    <i className="slider-arrow slider-arrow-left"></i>
                </button>
            )}

            {activeCategory+1 && (                 
                <Swiper                
                    modules={[Pagination]}
                    pagination={paginationEnabled 
                        ? { clickable: true } 
                        : false
                    }
                    spaceBetween={50}
                    slidesPerView={3}
                    onBeforeInit={(swiper: SwiperType) => {
                        //@ts-ignore
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={handleSlideChange}
                    className="mySwiper"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.year} className="slider-block">
                            <div>
                                <div className="slider-title">{item.year}</div>                                
                                <div>{item.data}</div> 
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            {!swiperRef.current?.isEnd && (
            <button
                className="slider-butt"
                onClick={() => {
                    swiperRef.current?.slideNext();
                }}
            >
                <i className="slider-arrow slider-arrow-right"></i>
            </button>)
            }
        </div>
    );
};

export default Slider;
