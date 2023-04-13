import { createSlice } from '@reduxjs/toolkit';

const cardIdSlice = createSlice({
  name: 'cardId',
  initialState: {
    cardId: '',
  },
  reducers: {
    setCardIdValue(state, action) {
      state.cardId = action.payload.id;
    },
  },
});

export const { setCardIdValue } = cardIdSlice.actions;

export default cardIdSlice.reducer;
