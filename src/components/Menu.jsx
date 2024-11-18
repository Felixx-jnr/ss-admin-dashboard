import React, { useState } from "react";

const Menu = () => {
  // Categories
  const categories = ["All Category", "Breakfast", "Lunch", "Dinner"];

  // Sample image data
  const images = [
    {
      id: 1,
      src: "/Background.png",
      category: "Breakfast",
      food: "Surf & Turf Gift Basket",
      price: "$89.24",
    },
    {
      id: 2,
      src: "/img-8 1.png",
      category: "Lunch",
      food: "Shaking Beef Tri-Tip",
      price: "$69.46",
    },
    {
      id: 3,
      src: "/Background (1).png",
      category: "Breakfast",
      food: "BBQ Rib Dinner",
      price: "$69.21",
    },

    {
      id: 4,
      src: "/img-8 1 (1).png",
      category: "Dinner",
      food: "Chicken & Ribs Combo",
      price: "$98.49",
    },
    {
      id: 5,
      src: "/Background (2).png",
      category: "Lunch",
      food: "Fried Chicken Dinne",
      price: "$83.56",
    },
    {
      id: 6,
      src: "/Background (3).png",
      category: "Lunch",
      food: "Dark & Stormy",
      price: "$90.58",
    },
  ];

  // State to store selected category
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All Category"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className=" bg-white mt-10 rounded-md overflow-hidden ">
      <div className="flex justify-between border-b border-[#E6E8F0] border-solid   ">
        <div>
          <h3 className=" py-8 font-inter font-bold text-lg text-[#081735] ml-[27px] ">
            Menu
          </h3>
        </div>
        <div className="mr-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-inter mt-11 pt-[7px] pb-4 font-medium text-[15px] text-[#5F6D7E] mr-6 transition duration-200 ${
                selectedCategory === category
                  ? " border-b-[2px] border-[#6C5DD3] text-[#6C5DD3]"
                  : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className=" pl-7 pr-[37px] mt-[22px] mb-4">
        <div className=" grid grid-cols-[1.73fr_1fr] gap-5  ">
          {images.slice(0, 2).map((image) => (
            <div className="relative ">
              <img
                src={image.src}
                alt={image.category}
                className="w-full object-cover rounded-lg "
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-[#FFFFFFA6] rounded-md border border-white px-4 ">
                <div className="flex items-center mt-4 justify-between">
                  <h3 className=" font-sans font-medium text-sm text-[#1E293B]">
                    {image.food}
                  </h3>
                  <p className=" font-sans font-medium text-sm text-[#1E293B]">
                    {image.price}
                  </p>
                </div>
                <p className="font-sans font-normal text-xs text-[#64748B] mb-4">
                  {" "}
                  456 Served
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Grid */}
      <div className=" pl-7 flex gap-7 pb-[34px]">
        <div className=" flex relative gap-7 menu-slide ">
          {images.slice(2).map((image) => (
            <div className=" rounded-lg gap-7 w-[258px] h-[234px] relative ">
              <img
                src={image.src}
                alt={image.category}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-[#FFFFFFA6] rounded-md border border-white px-4 ">
                <div className="flex items-center mt-4 justify-between">
                  <h3 className=" font-sans font-medium text-sm text-[#1E293B]">
                    {image.food}
                  </h3>
                  <p className=" font-sans font-medium text-sm text-[#1E293B]">
                    {image.price}
                  </p>
                </div>
                <p className="font-sans font-normal text-xs text-[#64748B] mb-4">
                  {" "}
                  456 Served
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex relative gap-7 menu-slide">
          {images.slice(2).map((image) => (
            <div className=" rounded-lg gap-7 w-[258px] h-[234px] relative ">
              <img
                src={image.src}
                alt={image.category}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] bg-[#FFFFFFA6] rounded-md border border-white px-4 ">
                <div className="flex items-center mt-4 justify-between">
                  <h3 className=" font-sans font-medium text-sm text-[#1E293B]">
                    {image.food}
                  </h3>
                  <p className=" font-sans font-medium text-sm text-[#1E293B]">
                    {image.price}
                  </p>
                </div>
                <p className="font-sans font-normal text-xs text-[#64748B] mb-4">
                  {" "}
                  456 Served
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
