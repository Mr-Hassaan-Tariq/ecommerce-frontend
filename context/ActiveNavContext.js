import React from "react";

const CreateActiveNavStateContext = React.createContext(undefined);
const CreateActiveNavDispatchContext = React.createContext(undefined);

function ActiveNavContextProvider({ children }) {
  const [activeNav, setActiveNav] = React.useState({
    id: "0",
    title: "All",
  });

  const handleActiveNavChange = activeNav => {
    setActiveNav(activeNav);
  };

  return (
    <CreateActiveNavStateContext.Provider value={activeNav}>
      <CreateActiveNavDispatchContext.Provider
        value={{ handleActiveNavChange }}>
        {children}
      </CreateActiveNavDispatchContext.Provider>
    </CreateActiveNavStateContext.Provider>
  );
}

const useCreateActiveNavStateContext = () => {
  const context = React.useContext(CreateActiveNavStateContext);
  if (context === undefined) {
    throw Error("CreateActiveNavStateContext nahi haai");
  }

  return context;
};

const useCreateActiveNavDispatchContext = () => {
  const context = React.useContext(CreateActiveNavDispatchContext);
  if (context === undefined) {
    throw Error("CreateActiveNavDispatchContext nahi haai");
  }

  return context;
};

const useActiveNavContext = () => {
  return [
    useCreateActiveNavStateContext(),
    useCreateActiveNavDispatchContext(),
  ];
};

export { ActiveNavContextProvider, useActiveNavContext };
