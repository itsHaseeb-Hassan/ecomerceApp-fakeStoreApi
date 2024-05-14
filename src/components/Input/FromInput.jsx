import React from 'react';

const FromInput = ({ name, id, placeholder }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={id} className="text-md font-bold text-gray-700">{name}</label>
      <input
        type="text"
        id={id}
        name={id}
        className="border border-gray-300 w-full rounded-md px-3 py-3 focus:outline-none focus:ring focus:ring-blue-200"
     
        placeholder={placeholder}
      />
    </div>
  );
};

export default FromInput;