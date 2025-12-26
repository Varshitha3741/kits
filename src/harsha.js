import React, { useState } from "react";

function Name() {
  const [name, setName] = useState(0);

  return (
    <div>
      <p>You clicked {name} times</p>
      <button onClick={() => setName(name + 2)}>
        Click me
      </button>
    </div>
  );
}

export default Name;
