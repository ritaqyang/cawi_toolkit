import React, { useEffect, useRef, useState } from "react";
import "./checkbox.css"

const Checkbox = ({value, onChange}) => {
    return (
        <>
        <label className="checkbox-container">
            <input type="checkbox" checked={value} onChange={onChange} />
            <span className="checkmark"></span>
        </label>
        </>
      );
}

export default Checkbox;