import "../../styles/componentStyle/roulete.scss";
import { Event, EventCategory } from "../IProps";
import { forwardRef } from "react";
import { RouleteProps } from "./IRoulete";
import RouletePoint from "./RoulettePoint";

const Roulete = forwardRef<HTMLDivElement, RouleteProps>((props, ref) => {
    const {cat, activeCategory, handleClick} = props;
    return <div className="layout-round" ref={ref}>
        {cat.map((category, i) => (
            <RouletePoint
                key={i}
                number={i}
                label={Event[category]}
                position={i}
                isActive={category === activeCategory}
                handleClick={() => {
                    handleClick(category);
                    console.log("User selected category", category)
                }   
            }/>
        ))}
    </div>;
})

export default Roulete;
