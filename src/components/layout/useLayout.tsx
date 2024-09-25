import { useState, useEffect, useCallback, useRef, createRef } from "react";
import eventsData from "./../data/json-data.json";
import { EventCategory, Event } from "./../IProps";
import { gsap } from 'gsap';
import { DataItem } from "../slider/ISlider";


const useLayout = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const [cat, setCat] = useState<EventCategory[]>([]);
    const [activeCategory, setActiveCategory] = useState<EventCategory>(0);
    
    const rotationRef = useRef(0);     
    const rotationBackwardRef = useRef(0);     
    const oneStepAngle = 360 / cat.length;
    const handleClick = (category: EventCategory, rouleteRef: React.RefObject<HTMLDivElement>) => {
        console.log(category,rouleteRef.current, '----')
        let prevCategory = 0;
        setActiveCategory(value => {
            prevCategory = value;
            return category;
        });
        const changeStepsCount = prevCategory - category;
        const angleDiff = (oneStepAngle * changeStepsCount);
        console.log(prevCategory, " -> ", category, changeStepsCount, angleDiff);
        const minimalAngleDiff = angleDiff > 180
            ? angleDiff - 360
            : angleDiff < -180
                ? angleDiff + 360
                : angleDiff;

        rotationRef.current += minimalAngleDiff;
        rotationBackwardRef.current -= minimalAngleDiff;
        gsap.to(rouleteRef.current, {
            duration: .5,
            rotation: rotationRef.current,
            ease: "power1.out",
        });
        rouleteRef.current?.childNodes.forEach(n => {
            gsap.to(n, {
                duration: .5,
                rotation: rotationBackwardRef.current,
                ease: "power1.out",
            })
        })
    };

    const handleCategoryName = useCallback((value: number) => {
        return EventCategory[value] || "Неизвестная категория";
    }, []);

    useEffect(() => {
        const entries = Object.entries(eventsData).flatMap(
            ([title, yearData]) => {
                return Object.entries(yearData).map(([year, event]) => ({
                    title: title,
                    year: year,
                    data: event.data,
                }));
            }
        );

        setCat(
            Object.values(EventCategory).filter(
                (value) => typeof value === "number"
            ) as EventCategory[]
        );

        const filterData = entries.filter(
            (item) => item.title === handleCategoryName(activeCategory)
        );
        setData(filterData);
    }, [activeCategory]);

    return {
        data,
        cat,
        activeCategory,
        handleClick,
    };
};

export default useLayout;
