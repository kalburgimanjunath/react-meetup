import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export default function SearchBox() {
  const [keywords, SetKeywords] = useState();
  const [places, SetPlace] = useState();

  const onSearch = (e) => {
    console.log(keywords + places);
  };
  return (
    <div className="searchbox">
      <div>
        <input
          type="search"
          name="keywords"
          placeholder="Search for Keywords"
          onChange={(e) => SetKeywords((p) => e.target.value)}
        />
        <input
          type="search"
          name="places"
          placeholder="Neighbour City,State,Country"
          onChange={(e) => SetPlace((p) => e.target.value)}
        />
        <button type="submit" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
