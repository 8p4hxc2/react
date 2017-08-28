export default(state, action) => {
  switch (action.type) {
    case 'RANDOM':
      return {
        random: 'STORE===' + Math.random()
      };
      break;

    default:
      return state;
  }
};
