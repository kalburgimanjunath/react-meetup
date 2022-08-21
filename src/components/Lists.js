import React from 'react';
import { Link } from 'react-router-dom';
export const List = ({ item }) => {
  return (
    <>
      <Link to={`./events/${item.id}`}>
        <div>
          <img src="https://picsum.photos/seed/picsum/200/300" />
        </div>
        <div className="list_item">
          <div>{item.time}</div>
          <div>{item.title}</div>
          <div>{item.type}</div>
          <div>{item.group}</div>
          <div>{item.participants} attendees</div>
        </div>
      </Link>
    </>
  );
};
export default function Lists({ lists }) {
  return (
    <div className="lists">
      {lists.map((item) => {
        return (
          <div className="list_container" key={item.id}>
            <List item={item} />
          </div>
        );
      })}
    </div>
  );
}
