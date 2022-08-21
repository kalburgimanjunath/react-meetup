import React from 'react';
import Avatar from './Avatar';
export default function Attendees() {
  const users = [
    {
      id: 1,
      name: 'Manjunath Kalburgi',
      type: 'Member',
      image_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
      id: 2,
      name: 'Manjunath Kalburgi',
      type: 'Member',
      image_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
      id: 3,
      name: 'Manjunath Kalburgi',
      type: 'Member',
      image_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
      id: 4,
      name: 'Manjunath Kalburgi',
      type: 'Member',
      image_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
      id: 5,
      name: 'Manjunath Kalburgi',
      type: 'Member',
      image_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
      id: 6,
      name: 'Manjunath Kalburgi',
      type: 'Member',
      image_url:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
  ];
  return (
    <div className="attendees">
      {users &&
        users.map((user) => {
          return <Avatar user={user} />;
        })}
    </div>
  );
}
