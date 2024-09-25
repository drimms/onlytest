import "../../styles/componentStyle/roulete.scss";
import { RouletePointProps } from "./IRoulete";
import classnames from "classnames";

const RouletePoint: React.FC<RouletePointProps> = ({
    number,
    isActive,
    label,
    handleClick,
}) => {
    return (
        <div
            key={number+Math.random()}
            className={classnames("point", `point-${number}`, {active: isActive})}
            onClick={() => handleClick()}
        >
            <div className="number">{number + 1}</div>
            <div className="label">{label}</div>
        </div>
    );
};

export default RouletePoint;
