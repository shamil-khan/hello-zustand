import { useUsersStore } from './usersStore';

export const usersLibrary = () => {
  const {
    users,
    groups,
    addUser,
    addGroup,
    addUserGroup,
    removeUser,
    removeGroup,
    removeUserGroup,
  } = useUsersStore();

  return {
    users,
    groups,
    handleAddUser: addUser,
    handleAddGroup: addGroup,
    handleAddUserGroup: addUserGroup,
    handleRemoveUser: removeUser,
    handleRemoveGroup: removeGroup,
    handleRemoveUserGroup: removeUserGroup,
  };
};
