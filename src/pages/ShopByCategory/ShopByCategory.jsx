import { useEffect, useState } from "react";
import CategoryToysCard from "./CategoryToysCard";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("math");

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div className="w-10/12 mx-auto my-14 ">
        <div>
          <h2 className="text-2xl uppercase font-bold text-center text-[#ff0099] mb-4">
            Shop By Category
          </h2>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center items-center mb-10 space-x-5">
          <div>
            <button
              onClick={() => handleTabClick("math")}
              className={`btn btn-outline border-[#ff0099] hover:bg-[#ff0099] hover:border-[#ff0099] ${
                activeTab == "math" ? " bg-[#ff0099] text-white" : ""
              }`}
            >
              Math Toy
            </button>
          </div>
          <div>
            <button
              onClick={() => handleTabClick("science")}
              className={`btn btn-outline border-[#ff0099] hover:bg-[#ff0099] hover:border-[#ff0099] ${
                activeTab == "science" ? " bg-[#ff0099] text-white" : ""
              }`}
            >
              Science Toys
            </button>
          </div>
          <div>
            <button
              onClick={() => handleTabClick("intelligence")}
              className={`btn btn-outline border-[#ff0099] hover:bg-[#ff0099] hover:border-[#ff0099] ${
                activeTab == "intelligence" ? " bg-[#ff0099] text-white" : ""
              }`}
            >
              Intelligence Toys
            </button>
          </div>
        </div>
        {/* Tab Wise Toys Data Section */}
        <div className="grid grid-cols-3 gap-5">
            {
                toys.map(toy => <CategoryToysCard 
                    key={toy._id}
                    toy={toy}
                    >
                    </CategoryToysCard>)
            }
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;
