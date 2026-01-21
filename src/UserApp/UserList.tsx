import { usersLibrary } from './usersLibrary';

// Displays individual users and their specific groups
export const UserList = () => {
  const { users, handleRemoveUser, handleRemoveUserGroup } = usersLibrary();

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
            onClick={() => handleRemoveUser(user.id)}
            style={{ marginLeft: '10px' }}
          >
            Delete User
          </button>

          <ul style={{ fontSize: '0.8rem' }}>
            {user.groups.map((g) => (
              <li key={g.id}>
                {g.name}
                <button onClick={() => handleRemoveUserGroup(user.id, g.id)}>
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
