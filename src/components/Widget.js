import React from 'react';
import { List } from './Lists';
export default function Widget({ widget, lists }) {
  return (
    <div className="widget">
      {lists.map((item) => {
        return <List item={item} />;
      })}
    </div>
  );
}
