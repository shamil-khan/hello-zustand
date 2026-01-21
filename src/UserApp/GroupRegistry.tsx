import { usersLibrary } from './usersLibrary';

// Displays the global available groups
export const GroupRegistry = () => {
  const { groups, handleRemoveGroup } = usersLibrary();

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h3>Global Groups Registry</h3>
      {groups.map((group) => (
        <div key={group.id}>
          {group.name}
          <button onClick={() => handleRemoveGroup(group.id)}>
            Remove Globally
          </button>
        </div>
      ))}
    </div>
  );
};
