import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function Sidebar() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="page sidebar">
      <h3>Events from your groups</h3>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}
