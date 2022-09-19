
import React, { useState } from "react";

import { FaStar } from 'react-icons/fa';

const ReviewForm = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div>
            {/* <p>Your Rating Your Experience</p>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <
                            FaStar className='star' color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} size={20}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}

                        />
                    </label>
                )
            })} */}

        </div>
    )
}

export default ReviewForm;