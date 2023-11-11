import React from "react";

export const LangSelector: React.FC = () => {
  return (
    <select className="lang-selector">
      <option value="en">English</option>
      <option value="cs">Česky</option>
      <option value="de">Deutsch</option>
    </select>
  );
};
