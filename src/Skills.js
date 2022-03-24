import React, { useState } from 'react';
import skills from './data';
import { FaThumbsUp, FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Skills = () => {
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
        <article className='skills'>
            <div className="img-container">
                <img src={image} alt={name} className="skill-img" />
            </div>
        </article>
    );
};

export default Skills;