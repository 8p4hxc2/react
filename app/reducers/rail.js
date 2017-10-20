export default(state = '', action) => {
  switch (action.type) {
    case 'RAIL':
      return ['Text 1', 'Text 2', 'Text 3', 'Text 4'];

    default:
      return state;
  }
};
