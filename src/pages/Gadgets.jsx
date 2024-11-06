import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Card from "../components/Card";

const Gadgets = () => {
  const allGadgets = useLoaderData();

  // State to keep track of selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter gadgets based on the selected category
  const filteredGadgets =
    selectedCategory === "All"
      ? allGadgets
      : allGadgets.filter((gadget) => gadget.category === selectedCategory);

  // List of categories available
  const categories = [
    { name: "All Product", value: "All" },
    { name: "Phones", value: "Smartphones" },
    { name: "Laptops", value: "Laptops" },
    { name: "Smart Watches", value: "Smartwatches" },
    { name: "Accessories", value: "Accessories" },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-4">
      {/* Sidebar */}
      <div className="md:w-2/12 w-7/12 mx-auto space-y-4">
        {categories.map((category) => (
          <button
            key={category.value}
            className={`btn w-full rounded-lg ${
              selectedCategory === category.value
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 lg:gap-6 w-10/12 mx-auto">
        {filteredGadgets.length > 0 ? (
          filteredGadgets.map((gadget, idx) => (
            <Card key={idx} gadget={gadget} />
          ))
        ) : (
          <div className="col-span-full text-center font-bold text-xl">
            No products available in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Gadgets;

// import { useLoaderData } from "react-router-dom";
// import Card from "../components/Card";

// const Gadgets = () => {
//   const allGadgets = useLoaderData();
//   // console.log(allGadgets);

//   return (
//     <section className="flex flex-col md:flex-row gap-4">
//       {/* Sidebar */}
//       <div className="md:w-2/12 w-7/12 mx-auto space-y-4">
//         <button className="btn w-full bg-gray-200 text-black rounded-lg">
//           All Product
//         </button>
//         <button className="btn w-full bg-gray-200 text-black rounded-lg">
//           Phones
//         </button>
//         <button className="btn w-full bg-gray-200 text-black rounded-lg">
//           Laptops
//         </button>
//         <button className="btn w-full bg-gray-200 text-black rounded-lg">
//           Smart Watches
//         </button>
//         <button className="btn w-full bg-gray-200 text-black rounded-lg">
//           Accessories
//         </button>
//       </div>

//       {/* Card Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
//         {allGadgets.map((gadget, idx) => (
//           <Card key={idx} gadget={gadget} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Gadgets;
