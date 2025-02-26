import React from 'react';

const ActivityList = ({ activities }) => {
  const getTimeSince = (time) => {
    const now = new Date();
    const diff = now - new Date(time);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m ago`;
  };

  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>
          {activity.activity} at {new Date(activity.time).toLocaleString()} - {getTimeSince(activity.time)}
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
