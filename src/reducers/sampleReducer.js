// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
