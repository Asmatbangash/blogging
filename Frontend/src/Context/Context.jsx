import { createContext, useState } from "react";
import { assets } from "../assets/assets";

export const contextData = createContext({
  querry: [],
  filteredData: () => {},
});

function ContextDataProvider({ children }) {
  const [querry, setQuerry] = useState("");

  // Filter the list based on search input
  const filteredData = assets.blogPosts.filter((item) =>
    item.title.toLowerCase().includes(querry.toLowerCase())
  );
  return (
    <contextData.Provider value={{ querry, setQuerry, filteredData }}>
      {children}
    </contextData.Provider>
  );
}

export default ContextDataProvider;
