import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

// const store = {
//   auth: {
//     user: {
//       name: '',
//       email: '',
//     },
//     token: null,
//     loading: false,
//     error: '',
//   },

// сразу в базу
//   flat: {
//     flatCost: 0,
//     totalSquareMeters: 0,
//     accumulatedMoney: 0,
//   },

//   monthData: {
//     month: '',
//     income: 0,
//     planAccumulations: 0,
//     expenses: 0,
//     year: "",
//     // doneMeters:  0,
//     // rest: income-expenses,
//     // plan%: rest/planAccumulations*100%,
//   },
// };

// DATABASE

// const UserModel = {
//   login: '',
//   email: '',
//   passwordHash: '',
//   token: null,
//   flatCost: 0,
//   totalMeters: 0,
//   accumulations: 0,
//   metersDone: 0,
// };

// const MonthDataModel = {
//   user: '',
//   year: '',
//   month: '',
//   income: 0,
//   expenses: 0,
//   planningAccumulations: 0,
// };
