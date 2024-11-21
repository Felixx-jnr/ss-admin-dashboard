import React from "react";

const customerList = [
  {
    name: "Ana Black",
    mail: "ana@gmail.com",
    src: "/Ellipse 3.png",
  },
  {
    name: "George Litz",
    mail: "georgelitz@gmail.com",
    src: "/Ellipse 4.png",
  },
  {
    name: "John Miller",
    mail: "jmiller@gmail.com",
    src: "/Ellipse 5.png",
  },
  {
    name: "Jane Jonhson",
    mail: "jj@gmail.com",
    src: "/Ellipse 6.png",
  },
  {
    name: "Mezei Ágnes",
    mail: "fefekartika@gmail.com",
    src: "/Ellipse 6 (1).png",
  },
  {
    name: "Katona Beatrix",
    mail: "edobram@gmail.com",
    src: "/Ellipse 6 (2).png",
  },
  {
    name: "Halász Emese",
    mail: "jiloputri@yahoo.com",
    src: "/Ellipse 6 (3).png",
  },
];

const CustomerList = () => {
  return (
    <div className=" ml-6 mid:w-72 w-full  bg-white shadow-[0px_8px_16px_0px_rgba(143,149,178,.14)] rounded-[6px] px-[23px] h-[445px]">
      <h3 className=" font-inter font-bold text-lg text-[#081735] mb-[21px] mt-[19px]">
        Customers List
      </h3>

      {customerList.map((customer) => (
        <div className=" flex items-center gap-4 mb-[13px] ">
          <div className="w-10 h-10 rounded-[50%]">
            <img
              src={customer.src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className=" font-inter font-bold text-sm text-[#1E293B]">
              {customer.name}
            </h4>
            <p className=" font-inter font-normal text-sm text-[#64748b]">
              {customer.mail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
