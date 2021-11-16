const GET_COUNTRIES = 'final-capstone/GET_COUNTRIES';

const initialState = [];

export const getData = () => async (dispatch) => {
  const response = await fetch('https://api.covid19tracking.narrativa.com/api/2021-11-16');
  const data = await response.json();
  const date = Object.keys(data.dates);
  const arr = [];
  const allCountries = Object.values(data.dates[date].countries);
  allCountries.forEach((country, i) => {
    const obj = {
      id: i,
      name: country.name,
      total_deaths: country.today_deaths,
      recovered: country.today_recovered,
    };
    arr.push(obj);
  });
  dispatch({ type: GET_COUNTRIES, payload: arr });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return [...action.payload];
    default:
      return state;
  }
};
