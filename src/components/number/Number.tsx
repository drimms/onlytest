import { useRef, useState, useEffect } from "react";
import "../../styles/componentStyle/number.scss";
import { NumberProps } from "./INumber";
import { gsap } from "gsap";

const Number: React.FC<NumberProps> = ({ data }) => {
    const yearPeriod = data.map((p) => p.year);
    let start = yearPeriod[0];
    let end = yearPeriod[yearPeriod.length-1];
    const startEl = useRef<HTMLDivElement>(null);
    const endEl = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (startEl.current && endEl.current) {
        gsap.to(startEl.current, {
            innerText: start,
            duration: 3,
            snap: {
                innerText: 1,
            },
        });

        gsap.to(endEl.current, {
            innerText: end,
            duration: 3,
            snap: {
                innerText: 1,
            },
        });
        }
    }, [start, end]);

    return (
        <div className="block">
            <div className="block-left" ref={startEl}>
                {yearPeriod[0]}
            </div>
            <div className="block-right" ref={endEl}>
                {yearPeriod[yearPeriod.length - 1]}
            </div>
        </div>
    );
};

export default Number;
