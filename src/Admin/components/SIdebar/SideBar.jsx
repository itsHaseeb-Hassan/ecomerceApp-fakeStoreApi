import React from 'react';
import SideBarGroupLink from './SideBarGroupLink';

const SideBar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen  p-6">
      <ul>
       <SideBarGroupLink />
      </ul>
      </div>
  );
}

export default SideBar;