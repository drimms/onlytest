import { EventCategory } from "../IProps";


export interface NavbuttProps {
    cat: EventCategory[];
    activeCategory: EventCategory;
    handleClick: (
        category: number, 
    ) => void;
}