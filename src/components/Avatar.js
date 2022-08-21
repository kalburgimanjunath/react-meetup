import React from 'react';
export default function Avatar({ user }) {
  return (
    <div>
      <img src={user.image_url} width={50} height={50} />
      <div>{user.name}</div>
      <div>{user.type}</div>
    </div>
  );
}
