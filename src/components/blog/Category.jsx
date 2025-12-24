import { useEffect, useState } from "react";
import axios from "axios";

export default function  Category ({ onChange }){
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "data/category.json"
          
        );
        setCategories(res.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleClick = (id) => {
    if(id==="all" && active === "all") return;
    setActive(id);
    onChange?.(id);
  };

  if (loading) {
    return (
      <div className="flex gap-3 justify-center">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-9 w-20 rounded-lg bg-slate-800 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className=" flex flex-row w-full overflow-x-auto mb-20  items-start">
    
      <div className="flex gap-2 sm:gap-3 md:gap-4 justify-start sm:justify-start ">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.id)}
            disabled={cat.id==="all" && active === "all"}
            className={`
              whitespace-nowrap
              rounded-md
              px-4 py-2
              cursor-pointer
              text-xs sm:text-sm
              font-medium
              transition-all duration-300
              ${
                   cat.id==="all"&& active === "all"
? "bg-blue-600 text-white cursor-not-allowed pointer-events-none":
                active === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};


