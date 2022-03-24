import React, { useState } from 'react';
import skills from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Reviews = () => {
    const [index, setIndex] = useState(0);
    const {name, image, text} = skills[index];

    const checkNumber = (number) =>{
        if(number > skills.length - 1){
            return 0;
        }
        if(number < 0){
            return skills.length - 1;
        }
        return number;
    };

    const nextSkill = () => {
        setIndex ((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevSkill = () => {
        setIndex ((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    return (
        <article className='skill'>

        </article>
    );
};

export default Reviews;