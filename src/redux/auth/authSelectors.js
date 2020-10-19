const isAuthenticated = (state) => state.auth.token;

const getUserName = (state) => state.auth.user.name;

const getLoader = (state) => state.auth.loading;

export default {
  isAuthenticated,
  getUserName,
  getLoader,
};
