import React, { useState } from 'react';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';

const ActivityLog = () => {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  return (
    <div>
      <h1>Baby Tracker</h1>
      <ActivityForm onAddActivity={handleAddActivity} />
      <ActivityList activities={activities} />
    </div>
  );
};

export default ActivityLog;
