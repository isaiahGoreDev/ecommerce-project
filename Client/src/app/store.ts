import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '@/features/auth/authSlice';
// import cartReducer from '@/features/cart/cartSlice';
// import userReducer from '@/features/user/userSlice';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // user: userReducer,
    // cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
