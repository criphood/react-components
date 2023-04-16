import { createSlice, Draft } from '@reduxjs/toolkit';
import { IUser } from '../../widgets/form/form';

export type State = Draft<{
  users: IUser[];
}>;

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers(state: State, action) {
      state.users.push(action.payload.user);
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
