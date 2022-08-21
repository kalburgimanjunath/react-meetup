import React from 'react';
export default function Filter() {
  return (
    <>
      <div>
        <select>
          <option>Any Type</option>
        </select>
        <select>
          <option>Any Distance</option>
        </select>
      </div>
      <div>
        <button>Reset Filters</button>
        <button>Suggested Events</button>
      </div>
    </>
  );
}
