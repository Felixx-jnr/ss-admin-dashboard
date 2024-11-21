import React from "react";

const cardDets = [
  {
    icon: "/paper.svg",
    title: "Total Menu",
    amount: "$345",
  },
  {
    icon: "/Activity.svg",
    title: "Total Revenue",
    amount: "$37,193.00",
  },
  {
    icon: "/3 User.png",
    title: "Total Customer",
    amount: "1349",
  },
  {
    icon: "/Bag.svg",
    title: "Total Orders",
    amount: "3,500",
  },
];

const Card = () => {
  return (
    <div className="  mt-5 md:mt-[50px] grid md:grid-cols-4 xs:grid-cols-2 xl:gap-[33px] gap-4  justify-items-center ">
      {cardDets.map((card) => (
        <div className=" bg-white/25 w-full max-w-[254px] h-[182px] rounded-[6px] border border-white backdrop-blur-[27.2px] shadow-[0px_12px_16px_-4px_rgba(12,26,36,.04)] xl:pl-6 pl-3 pt-6  ">
          <div className="bg-white p-3 rounded-[17px] inline-block ">
            <img
              src={card.icon}
              alt={card.title}
            />
          </div>

          <p className=" font-inter font-normal text-sm text-[#64748B] mt-4 mb-2">
            {card.title}
          </p>

          <h3 className="font-inter font-semibold text-2xl xl:text-3xl text-[#1E293B]">
            {card.amount}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
