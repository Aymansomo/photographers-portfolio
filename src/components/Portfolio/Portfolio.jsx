import { useState } from "react";
import Image1 from "../../assets/portfolioImages/Project1.jpg";
import Image2 from "../../assets/portfolioImages/Project2.jpg";
import Image3 from "../../assets/portfolioImages/Project3.jpg";
import Image4 from "../../assets/portfolioImages/Project4.jpg";
import Image5 from "../../assets/portfolioImages/Project5.jpg";
import Image6 from "../../assets/portfolioImages/Project6.jpg";
import Image7 from "../../assets/portfolioImages/Project7.jpg";
import Image8 from "../../assets/portfolioImages/Project8.jpg";
import Image9 from "../../assets/portfolioImages/Project9.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const workItems = [
    {
      id: 1,
      category: "Portraits",
      imageUrl: Image1,
      title: "Project 1",
      href: "#",
    },
    {
      id: 2,
      title: "Project 2",
      category: "Portraits",
      imageUrl: Image2,
      href: "#",
    },
    {
      id: 3,
      title: "Project 3",
      category: "Professional Gear",
      imageUrl: Image3,
      href: "#",
    },
    {
      id: 4,
      title: "Project 4",
      category: "Professional Gear",
      imageUrl: Image4,
      href: "#",
    },
    {
      id: 5,
      category: "Group Photos",
      imageUrl: Image5,
      title: "Project 5",
      href: "#",
    },
    {
      id: 6,
      title: "Project 6",
      category: "Group Photos",
      imageUrl: Image6,
      href: "#",
    },
    {
      id: 7,
      title: "Project 7",
      category: "Portfolio",
      imageUrl: Image7,
      href: "#",
    },
    {
      id: 8,
      title: "Project 8",
      category: "Portfolio",
      imageUrl: Image8,
      href: "#",
    },
    {
      id: 9,
      title: "Project 9",
      category: "Portfolio",
      imageUrl: Image9,
      href: "#",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? workItems
      : workItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-8 text-white mb-14">
      <h2 className="text-4xl font-bold text-center mb-8 uppercase">
        My <span className="text-blue-500"> Portfolio </span>
      </h2>

      <div className="flex sm:justify-center flex-wrap mb-8">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 mx-2 max-sm:my-2 ${
            selectedCategory === "all" ? "bg-blue-500" : "bg-gray-700"
          } hover:bg-blue-500 rounded`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Portraits")}
          className={`px-4 py-2 mx-2 max-sm:my-2 ${
            selectedCategory === "Portraits" ? "bg-blue-500" : "bg-gray-700"
          } hover:bg-blue-500 rounded`}
        >
          Portraits
        </button>
        <button
          onClick={() => setSelectedCategory("Professional Gear")}
          className={`px-4 py-2 mx-2 max-sm:my-2 ${
            selectedCategory === "Professional Gear"
              ? "bg-blue-500"
              : "bg-gray-700"
          } hover:bg-blue-500 rounded`}
        >
          Professional Gear
        </button>
        <button
          onClick={() => setSelectedCategory("Group Photos")}
          className={`px-4 py-2 mx-2 ${
            selectedCategory === "Group Photos" ? "bg-blue-500" : "bg-gray-700"
          } hover:bg-blue-500 rounded`}
        >
          Group Photos
        </button>
        <button
          onClick={() => setSelectedCategory("Portfolio")}
          className={`px-4 py-2 mx-2 ${
            selectedCategory === "Portfolio" ? "bg-blue-500" : "bg-gray-700"
          } hover:bg-blue-500 rounded`}
        >
          Portfolio
        </button>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sd:w-10/12 gap-8">
          {filteredItems.map((item) => (
            <a
              href={item.href}
              key={item.id}
              className="relative bg-gray-800 rounded shadow-lg group"
            >
              <div className="w-full h-64 overflow-hidden rounded">
                <img
                  loading="lazy"
                  src={item.imageUrl}
                  alt="Portfolio item"
                  className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
