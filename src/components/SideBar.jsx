import React, { useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { name: "Dashboard", icon: "/3-User.svg" },
    { name: "Orders", icon: "/3-User.svg" },
    { name: "Analytics", icon: "/3-User.svg" },
    { name: "Customers", icon: "/3-User.svg" },
    { name: "Menu", icon: "/3-User.svg" },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className=" bg-white flex flex-col pb-[41px] w-[271px]">
      {/* Logo */}
      <div className=" flex items-center mt-[39px] mb-[77px] self-center">
        <div className=" mr-[18px] bg-purple px-[6px] py-[9px] rounded-ss-3xl rounded-ee-3xl">
          <img
            src="/vector.svg"
            alt="logo"
          />
        </div>
        <div>
          <h3 className=" font-crete text-2xl ">Chucky</h3>
          <p className="font-crete text-sm">Admin Dashboard</p>
        </div>
      </div>

      {/* Links */}
      <ul className="px-6">
        {links.map((link, index) => (
          <li
            key={index}
            className={` font-inter font-bold w-full flex items-center gap-4 py-3 px-5 text-left cursor-pointer rounded-lg 
              ${
                activeLink === index
                  ? "bg-purple text-white"
                  : "hover:bg-gray-200 text-lightGrey"
              }`}
            onClick={() => handleLinkClick(index)}
          >
            <span>
              <img
                src="/3-User.svg"
                alt=""
                className=""
              />
            </span>
            {link.name}
          </li>
        ))}
      </ul>

      {/* Subscription Card */}
      <div className="bg-[#F8F9FB] rounded-[10px] p-4 mx-[21px] mt-[311px]">
        <div>chart</div>
        <div>
          <h3 className="font-inter font-semibold text-base text-[#272d37]">
            Subscription Plan
          </h3>
          <p className=" font-inter font-normal text-[#5F6D7E] text-sm">
            Your Subscription plan will expire soon please upgrade!
          </p>
          <h3 className="mt-4 text-purple text-sm font-semibold">Upgrade</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
