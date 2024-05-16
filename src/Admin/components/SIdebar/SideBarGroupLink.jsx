import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoChevronDown , GoChevronUp} from "react-icons/go";

const SideBarGroupLink = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = [
    { title: 'Dashboard', url: '/dashboard' },
    { title: 'Admin', url: '/admin' },
    { 
      title: 'Product', 
      url: '/product',
      dropdownItems: [
        { title: 'Add Product', url: '/product/add' },
        { title: 'View Product', url: '/product/view' }
      ]
    },
    { title: 'Login', url: '/login' }
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='my-5 '>
      {links.map((link, index) => (
        <div key={index} className='py-2 mx-5'>
          {link.dropdownItems ? (
            <div >
              <div onClick={toggleDropdown} className="cursor-pointer flex justify-between items-center text-[22px] font-normal ">
                {link.title}   {dropdownOpen ?<GoChevronDown size={20}/>: <GoChevronUp size={20}/>}
              </div>
            
              {dropdownOpen && (
                <div className="ml-3">
                  {link.dropdownItems.map((item, idx) => (
                    <Link key={idx} to={item.url} className="block py-1 text-[20px] font-normal">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link to={link.url} className="block text-[22px] font-normal">
              {link.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBarGroupLink;