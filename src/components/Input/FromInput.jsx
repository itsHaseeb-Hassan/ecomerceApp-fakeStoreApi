import React from 'react';

const FromInput = ({ name, type, label, placeholder,onChange,value }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={name} className="text-md font-bold text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        onChange={onChange}
        name={name}
        value={value}
        className="border border-gray-300 w-full rounded-md px-3 py-3 focus:outline-none focus:ring focus:ring-blue-200"
     
        placeholder={placeholder}
      />
    </div>
  );
};

export default FromInput;