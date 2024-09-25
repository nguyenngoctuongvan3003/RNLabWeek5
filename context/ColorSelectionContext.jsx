import React, { createContext, useState, useContext } from 'react';

const ColorSelectionContext = createContext();

export const ColorSelectionProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <ColorSelectionContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorSelectionContext.Provider>
  );
};

export const useColorSelection = () => useContext(ColorSelectionContext);