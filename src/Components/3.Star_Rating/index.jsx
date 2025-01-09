import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

export default function Star_Rating({ No_Of_Star = 10 }) {
    const [Rating, SetRating] = useState(0);
    const [hover, Sethover] = useState(0);

    function Click_handler(Current_index) {
        SetRating(Current_index);
    }

    function Mouse_Move_handler(Current_index) {
        Sethover(Current_index);
    }

    function Mouse_Leave_Handler() {
        Sethover(0);
    }

    return (
        <div>
            {[...Array(No_Of_Star)].map((_, index) => (
                <FaStar key={index}
                    className={index <= (hover || Rating) ? 'active' : 'inactive'}
                    onClick={() => Click_handler(index)}
                    onMouseMove={() => Mouse_Move_handler(index)}
                    onMouseLeave={Mouse_Leave_Handler}
                />
            ))}
        </div>
    );
}
