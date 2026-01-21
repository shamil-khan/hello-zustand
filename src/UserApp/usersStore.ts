// counterStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface Group {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  groups: Group[];
}

interface UsersState {
  users: User[];
  groups: Group[];
  addUser: (user: User) => void;
  addGroup: (group: Group) => void;
  addUserGroup: (userId: number, group: Group) => void;
  removeUser: (userId: number) => void;
  removeGroup: (groupId: number) => void;
  removeUserGroup: (userId: number, groupId: number) => void;
}

export const useUsersStore = create<UsersState>()(
  immer((set, get) => ({
    users: [],
    groups: [],
    addUser: (user) =>
      set((state) => {
        state.users.push(user);
      }),
    addGroup: (group) =>
      set((state) => {
        state.groups.push(group);
      }),
    addUserGroup: (userId, group) =>
      set((state) => {
        const user = state.users.find((u) => u.id === userId);
        const groupExists = user?.groups.some((g) => g.id === group.id);
        if (!groupExists && user) user.groups.push(group);
      }),
    removeUser: (userId) =>
      set((state) => {
        state.users = state.users.filter((u) => u.id !== userId);
      }),
    removeGroup: (groupId) =>
      set((state) => {
        state.groups = state.groups.filter((g) => g.id !== groupId);
        state.users = state.users.map((u) => ({
          ...u,
          groups: u.groups.filter((g) => g.id !== groupId),
        }));
      }),
    removeUserGroup: (userId, groupId) =>
      set((state) => {
        const user = state.users.find((u) => u.id === userId);
        if (user) user.groups = user.groups.filter((g) => g.id !== groupId);
      }),
  })),
);
