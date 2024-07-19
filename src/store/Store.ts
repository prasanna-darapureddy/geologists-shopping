import { configureStore } from '@reduxjs/toolkit'
import  ShoppingListSlice from '../slice/Slice'

const store = configureStore({
  reducer: {
    shoppingList: ShoppingListSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store