const GET_REGIONS = 'final-capstone/GET_REGIONS';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};
