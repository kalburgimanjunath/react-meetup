import React from 'react';
import Lists from './Lists';
import Filter from './Filter';
export default function ContentPane({ lists }) {
  return (
    <div className="page content">
      <div className="content_container">
        <div className="filter">
          <Filter />
        </div>
        <div>
          <Lists lists={lists} />
        </div>
      </div>

      <div className="ads">Ads</div>
    </div>
  );
}
