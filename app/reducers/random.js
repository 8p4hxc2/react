export default(state = '', action) => {
  switch (action.type) {
    case 'RANDOM':
      return 'STORE===' + Math.random();

    default:
      return state;
  }
};
