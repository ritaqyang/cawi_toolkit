import React, { useEffect, useRef, useState } from "react";

const Checkbox = ({label, value, onChange}) => {
    return (
        <>
        <label className="checkbox-container">{label}
            <input type="checkbox" checked={value} onChange={onChange} />
            <span className="checkmark"></span>
        </label>
        </>
      );
}

export default Checkbox;