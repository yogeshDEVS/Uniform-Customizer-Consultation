// DesignContext.js
import React, { createContext, useState } from 'react';

export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [designs, setDesigns] = useState([]);
  const [screenshotUri, setScreenshotUri] = useState(null);

  const saveDesign = (design) => {
    setDesigns((prevDesigns) => [...prevDesigns, design]);
  };

  return (
    <DesignContext.Provider value={{ designs, saveDesign, screenshotUri, setScreenshotUri }}>
      {children}
    </DesignContext.Provider>
  );
};