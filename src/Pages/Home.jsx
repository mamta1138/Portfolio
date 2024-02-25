import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flexcol items-center-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-gray-600">This is my home page.</p>
      <button className="mt-5 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded" onClick={handleClick}>
        Click me!
      </button>
      {count > 0 && <p>You've clicked the button {count} times.</p>}
    </div>
  );
};

export default Home;