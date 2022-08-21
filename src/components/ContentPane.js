import React from 'react';
import Lists from './Lists';
export default function ContentPane({ lists }) {
  return (
    <div className="page content">
      <div className="content_container">
        <div>filter</div>
        <div>
          <Lists lists={lists} />
        </div>
      </div>

      <div className="ads">Ads</div>
    </div>
  );
}
