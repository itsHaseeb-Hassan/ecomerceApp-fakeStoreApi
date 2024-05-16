import React from 'react';
import SideBarGroupLink from './SideBarGroupLink';

const SideBar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen ">
      <h1 className='text-3xl font-semibold p-6 border-b'>Dashboard</h1>
      <div className='p-6'>
      <ul>
       <SideBarGroupLink />
      </ul>
      </div>
    </div>
  );
}

export default SideBar;