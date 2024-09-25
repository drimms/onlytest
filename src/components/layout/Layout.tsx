import Slider from "../slider/Slider";
import "../../styles/componentStyle/layout.scss";
import ButtonNav from "../title/Title";
import Number from "../number/Number";
import Navbutt from "../navbutt/Navbutt";
import Roulete from "../roulete/Roulete";
import useLayout from "./useLayout";
import Layout_line from "./Layoutline";
import { createRef, useRef } from "react";

const Layout = () => {
    const rouleteRef = createRef<HTMLDivElement>();
    const { data, cat, activeCategory, handleClick } = useLayout();

    return (
        <div className="layout-block">
            <>
                <Layout_line />
                <Roulete
                    cat={cat}
                    activeCategory={activeCategory}
                    handleClick={(c) => handleClick(c, rouleteRef)}
                    ref={rouleteRef}
                />
            </>
            <Number 
                data={data} 
            />
            <ButtonNav />
            <Navbutt
                cat={cat}
                activeCategory={activeCategory}
                handleClick={(c) => handleClick(c, rouleteRef)}
            />
            <Slider 
                data={data} 
                activeCategory={activeCategory} 
            />
        </div>
    );
};

export default Layout;
