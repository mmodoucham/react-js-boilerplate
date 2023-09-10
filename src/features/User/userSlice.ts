import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from './types'

const initialState: UserState = {
  username: 'Guest',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
  },
})

export const { setUsername } = userSlice.actions

export default userSlice.reducer
