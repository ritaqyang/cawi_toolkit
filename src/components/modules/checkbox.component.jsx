// Checkbox.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../../store/user/user.action";
import "./checkbox.css";
import { selectSections } from "../../store/user/user.selector";

const Checkbox = ({ sectionName, index }) => {
    const dispatch = useDispatch();
    const sectionValues = useSelector(selectSections);
  
    // const handleChange = () => {
    //   const newValue = sectionValues[index] === 0 ? 1 : 0;
    //   dispatch(setProgress(sectionName, index, newValue));
    // };
  
  return (
    <>

    <label className="c-container">
      complete_button_for_{sectionName}_{index}
      <input
        type="checkbox"
        // checked={sectionValues[index] === 1}
        // onChange={handleChange}
      />
      <span className="checkmark"></span>
    </label>
    </>
    
  );
};

export default Checkbox;
