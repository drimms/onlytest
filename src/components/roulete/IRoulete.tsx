import { EventCategory } from "../IProps";

export interface RouleteProps {
    cat: EventCategory[];
    activeCategory: EventCategory;
    handleClick: (
        category: EventCategory, 
    ) => void;
    
}

export interface RouletePointProps {
    number: number; // Actual number of point
    position: number; // Number of position
    isActive: boolean;
    label: string;
    handleClick: () => void;
}