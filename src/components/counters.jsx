import React from "react";

import Counter from "./counter";

const Counters = ({
  counters,
  onReset,
  handleIncrement,
  handleDecrement,
  handleDelete
}) => {
  return (
    <div>
      <button className="btn btn-secondary" onClick={onReset}>
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
