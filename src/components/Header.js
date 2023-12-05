import React, { useState } from "react";

const Header = ({ setSearchText }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setSearchText(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search..."
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
