import { createContext, useContext, useEffect, useState } from "react";

const MetaContext = createContext();

export const MetaProvider = ({ children }) => {
  const [meta, setMeta] = useState({
    title: "Munchy Magic",
    description: "Discover delicious recipes from around the world.",
  });

  useEffect(() => {
    // Update <title>
    document.title = meta.title;

    // Update <meta name="description">
    let descTag = document.querySelector("meta[name='description']");
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    descTag.content = meta.description;
  }, [meta]);

  return (
    <MetaContext.Provider value={{ setMeta }}>{children}</MetaContext.Provider>
  );
};

export const useMeta = () => useContext(MetaContext);
