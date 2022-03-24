import React, { useState } from "react";
import skills from "./data";
import { FaThumbsUp, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Skills = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text } = skills[index];

  const checkNumber = (number) => {
    if (number > skills.length - 1) {
      return 0;
    }
    if (number < 0) {
      return skills.length - 1;
    }
    return number;
  };

  const nextSkill = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevSkill = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="skills">
      <div className="img-container">
        <img src={image} alt={name} className="skill-img" />
        <span className="quote-icon">
          <FaThumbsUp />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevSkill}>
          <FaArrowLeft />
        </button>
        <button className="prev-btn" onClick={nextSkill}>
          <FaArrowRight />
        </button>
      </div>
    </article>
  );
};

export default Skills;
