{/*import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    const val = e.target.value;

    if (val === "AC") {
      setValue("");
    } 
    else if (val === "back") {
      setValue(value.slice(0, -1));
    } 
    else if (val === "=") {
      try {
        setValue(eval(value));
      } catch {
        setValue("Error");
      }
    } 
    else {
      setValue(value + val);
    }
  };

  return (

    <div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400">
      
      <input
        className="w-64 p-3 text-xl border mb-4 text-right "
        value={value}
        placeholder="0"
        readOnly
      />

      <div className="grid grid-cols-4 gap-2 w-64">
        {[
          "(", ")", "%", "AC",
          "7", "8", "9", "*",
          "4", "5", "6", "-",
          "1", "2", "3", "+",
          "0", "back", "=", "/"
        ].map((btn) => (
          <button
            key={btn}
            value={btn}
            onClick={handleClick}
            className="p-3 bg-white border hover:bg-gray-200"
          >
            {btn}
          </button>
        ))}
      </div>

    </div>
    </div>
  );
};

export default Calculator; */}