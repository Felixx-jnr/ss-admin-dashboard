import React, { useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    {
      name: "Dashboard",
      icon: "/dashboard.svg",
      iconActive: "/dashboard-active.svg",
    },
    { name: "Orders", icon: "/Bag-1.svg", iconActive: "/Bag-1 -active.svg" },
    {
      name: "Analytics",
      icon: "/Chart.svg",
      iconActive: "/Chart - active.svg",
    },
    {
      name: "Customers",
      icon: "/3-User.svg",
      iconActive: "/3-User-active.svg",
    },
    { name: "Menu", icon: "/Document.svg", iconActive: "/Document-active.svg" },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="lg:hidden absolute top-6 left-2 z-50 p-2 bg-purple text-white rounded-lg focus:outline-none"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={` bg-white flex flex-col pb-[41px] fixed top-0 left-0 h-full w-56 z-40 transition-transform transform 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:relative lg:w-[271px]`}
      >
        {/* Logo */}
        <div
          className={`flex items-center mt-[39px] mb-[77px] self-center ${
            isSidebarOpen ? "mt-20" : ""
          }`}
        >
          <div className="mr-[18px] bg-[#6C5DD3] px-[6px] py-[9px] rounded-ss-3xl rounded-ee-3xl">
            <img
              src="/vector.svg"
              alt="logo"
            />
          </div>
          <div>
            <h3 className="font-crete text-2xl">Chucky</h3>
            <p className="font-crete text-sm">Admin Dashboard</p>
          </div>
        </div>

        {/* Links */}
        <ul className="px-6">
          {links.map((link, index) => (
            <li
              key={index}
              className={`font-inter font-bold w-full flex items-center gap-4 py-3 px-5 text-left cursor-pointer rounded-lg 
                ${
                  activeLink === index
                    ? "bg-purple text-white"
                    : "hover:bg-gray-200 text-lightGrey"
                }`}
              onClick={() => handleLinkClick(index)}
            >
              <span className="w-6 h-6">
                <img
                  src={activeLink === index ? link.iconActive : link.icon}
                  alt={`${link.name} icon`}
                  className="w-full h-full object-contain"
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
            <p className="font-inter font-normal text-[#5F6D7E] text-sm">
              Your Subscription plan will expire soon, please upgrade!
            </p>
            <h3 className="mt-4 text-purple text-sm font-semibold">Upgrade</h3>
          </div>
        </div>
      </div>

      {/* Backdrop for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
