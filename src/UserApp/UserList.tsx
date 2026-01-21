import React from 'react';
import { useUsersStore } from './usersStore';

// Displays individual users and their specific groups
export const UserList = () => {
  const users = useUsersStore((state) => state.users);
  const removeUser = useUsersStore((state) => state.removeUser);
  const removeUserGroup = useUsersStore((state) => state.removeUserGroup);

  return (
    <div
      style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}
    >
      <h3>Users List</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            marginBottom: '10px',
            padding: '5px',
            background: '#f9f9f9',
          }}
        >
          <strong>{user.name}</strong>
          <button
            onClick={() => removeUser(user.id)}
            style={{ marginLeft: '10px' }}
          >
            Delete User
          </button>

          <ul style={{ fontSize: '0.8rem' }}>
            {user.groups.map((g) => (
              <li key={g.id}>
                {g.name}
                <button onClick={() => removeUserGroup(user.id, g.id)}>
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
