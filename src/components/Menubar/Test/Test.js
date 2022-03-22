import React, { useState } from 'react';

const Test = (props) => {

  const [count, setCount] = useState(0);
 

  const plus = () => {
 
    // const oldCount = count+1;
    // const newCount = oldCount + 1;
    setCount(count + 1);
  }

  const minus = () => {
    // const oldMinus = count-1;
    // const newMinus = oldMinus - 1;
    setCount(count - 1);

  }

  console.log(count)
  return (
    <div>
      <h3>This is Test</h3> 
      <h1>{ count}</h1>
      <div className='count mt-5'>
        <button onClick={plus} className="ms-3 p-3">+</button>
        <button onClick={minus} className="ms-3 p-3">-</button>
      </div>
    </div>
  );
};

export default Test;