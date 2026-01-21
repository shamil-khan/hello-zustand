import React from 'react';
import { useUsersStore } from './usersStore';

// Displays the global available groups
export const GroupRegistry = () => {
  const groups = useUsersStore((state) => state.groups);
  const removeGroup = useUsersStore((state) => state.removeGroup);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>Global Groups Registry</h3>
      {groups.map((group) => (
        <div key={group.id}>
          {group.name}
          <button onClick={() => removeGroup(group.id)}>Remove Globally</button>
        </div>
      ))}
    </div>
  );
};
