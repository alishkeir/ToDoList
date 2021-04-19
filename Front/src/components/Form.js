import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <form className="ui form">
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column five wide">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              name=""
              placeholder="Enter Something To Do"
            />
          </div>
          <div className="column one wide">
            <button type="submit" className="green ui button circular icon">
              <i className="plus icon white"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
