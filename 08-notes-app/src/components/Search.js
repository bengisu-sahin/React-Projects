import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    // Arama işlemini gerçekleştirmek için, "onSearch" prop'unu kullanıyoruz.
    // Bu prop, arama işlemini ana uygulama bileşenine iletecektir.
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Arama yapın..."
      />
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
};

export default SearchBar;
