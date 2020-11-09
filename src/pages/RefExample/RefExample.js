import React, { useState, useRef, useEffect } from "react";

const RefExample = () => {
  //   const [isEditing, setEditing] = useState(false);

  const inputRef = useRef(null);

  //   const toggleEditing = () => {
  //     setEditing(!isEditing);
  //   };

  useEffect(() => {
    // if (isEditing) {
    inputRef.current.focus();
    // }
  }, []);

  return (
    <div>
      <select ref={inputRef}>
        <option>option 1</option>
      </select>
      {/* <button onClick={toggleEditing}>Edit</button> */}
    </div>
  );
};

export default RefExample;
