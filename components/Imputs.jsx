import React from "react";

export const Imputs = ({ name }) => {
  return (
    <div>
      {" "}
      <label>
        Peso:
        <input
          type="number"
          className="ml-2"
          value={name}
          onChange={(e) =>
            handlePositiveInputChange(parseFloat(e.target.value), setPeso)
          }
        />
      </label>
    </div>
  );
};
