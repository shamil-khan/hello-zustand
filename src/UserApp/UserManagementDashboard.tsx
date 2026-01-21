import { GroupRegistry } from './GroupRegistry';
import { UserList } from './UserList';
import { usersLibrary } from './usersLibrary';

export default function UserManagementDashboard() {
  const { users, groups, handleAddUser, handleAddGroup, handleAddUserGroup } =
    usersLibrary();

  const handleCreateUser = () => {
    const id = Date.now();
    handleAddUser({ id, name: `User_${id.toString().slice(-4)}`, groups: [] });
  };

  const handleCreateGroup = () => {
    const id = Date.now();
    handleAddGroup({ id, name: `Group_${id.toString().slice(-4)}` });
  };

  const handleAssignToFirstUser = (group: any) => {
    if (users.length > 0) {
      handleAddUserGroup(users[0].id, group);
    } else {
      alert('Create a user first!');
    }
  };

  return (
    <div
      style={{ maxWidth: '600px', margin: 'auto', fontFamily: 'sans-serif' }}
    >
      <h1>Store Manager (Zustand + Immer)</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={handleCreateUser} style={{ background: '#e1f5fe' }}>
          + Add Random User
        </button>
        <button onClick={handleCreateGroup} style={{ background: '#f1f8e9' }}>
          + Add Global Group
        </button>
      </div>

      <UserList />
      <GroupRegistry />

      <div style={{ marginTop: '20px', padding: '10px', background: '#eee' }}>
        <h4>Quick Assign</h4>
        <p>Assign existing groups to the first user in the list:</p>
        {groups.map((g) => (
          <button
            key={g.id}
            onClick={() => handleAssignToFirstUser(g)}
            style={{ marginRight: '5px' }}
          >
            Add {g.name} to {users[0]?.name || '...'}
          </button>
        ))}
      </div>
    </div>
  );
}
