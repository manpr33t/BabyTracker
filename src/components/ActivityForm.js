import React, { useState } from 'react';

const ActivityForm = ({ onAddActivity }) => {
  const [activity, setActivity] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddActivity({ activity, time: new Date(time) });
    setActivity('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={activity} onChange={(e) => setActivity(e.target.value)} required>
        <option value="">Select Activity</option>
        <option value="Food">Food</option>
        <option value="Diaper">Diaper</option>
        <option value="Massage">Massage</option>
        <option value="Play">Play</option>
      </select>
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Log Activity</button>
    </form>
  );
};

export default ActivityForm;
