import React from "react";

const CreateOpenModalStateContext = React.createContext(undefined);
const CreateOpenModalDispatchContext = React.createContext(undefined);

function OpenModalContextProvider({ children }) {
  const [openModal, setOpenModoal] = React.useState(false);

  const handleOpenModalChange = openModal => {
    setOpenModoal(openModal);
  };

  return (
    <CreateOpenModalStateContext.Provider value={openModal}>
      <CreateOpenModalDispatchContext.Provider
        value={{ handleOpenModalChange }}>
        {children}
      </CreateOpenModalDispatchContext.Provider>
    </CreateOpenModalStateContext.Provider>
  );
}

const useCreateOpenModalStateContext = () => {
  const context = React.useContext(CreateOpenModalStateContext);
  if (context === undefined) {
    throw Error("CreateOpenModalStateContext nahi haai");
  }

  return context;
};

const useCreateOpenModalDispatchContext = () => {
  const context = React.useContext(CreateOpenModalDispatchContext);
  if (context === undefined) {
    throw Error("CreateActiveNavDispatchContext nahi haai");
  }

  return context;
};

const useOpenModalContext = () => {
  return [
    useCreateOpenModalStateContext(),
    useCreateOpenModalDispatchContext(),
  ];
};

export { OpenModalContextProvider, useOpenModalContext };
