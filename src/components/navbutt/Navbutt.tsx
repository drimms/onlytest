import { useRef } from "react";
import "../../styles/componentStyle/navbutt.scss";
import { NavbuttProps } from "./INavbutt";


const Navbutt: React.FC<NavbuttProps> = ({
    cat, 
    activeCategory, 
    handleClick
}) => {
console.log((activeCategory + cat.length + 1) % cat.length, '---sdfsdf')
    return (
        <div className='navbutt'>
                <div className='navbutt-text'>
                    {'0'+ `${activeCategory+1}`}/{'0'+cat.length}
                </div>
                <div className='navbutt-block'>
                    <div 
                        className='navbutt-butt' 
                        onClick={() => handleClick((activeCategory + cat.length - 1) % cat.length)}
                    >
                        <i className="navbutt-arrow navbutt-arrow-left"></i>
                    </div>
                    <div 
                        className='navbutt-butt' 
                        onClick={() => handleClick((activeCategory + cat.length + 1) % cat.length)}
                    >
                        <i className="navbutt-arrow navbutt-arrow-right"></i>
                    </div>
                </div>            
        </div>
    );
};

export default Navbutt;