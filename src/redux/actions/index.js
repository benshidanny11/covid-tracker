import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = () => async (dispatch) => {
  const { data } = await axios.get(url);
  const modifiedData = {
    confirmed: data.confirmed,
    recovered: data.recovered,
    deaths: data.deaths,
    lastUpdate: data.lastUpdate,
  };

  dispatch({ type: "GROBAL_INF", payload: modifiedData });
};

export const fetchSpesData = (country) => async (dispatch) => {
  const { data } = await axios.get(`${url}/countries/${country}`);
  const modifiedData = {
    confirmed: data.confirmed,
    recovered: data.recovered,
    deaths: data.deaths,
    lastUpdate: data.lastUpdate,
  };
  dispatch({ type: "SPECIFIC_INF", payload: modifiedData });
};

export const fetchDailyData = () => async (dispatch) => {
  const { data } = await axios.get(`${url}/daily`);
  const modifiedData = data.map((dailyData) => {
    return {
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    };
  });
  dispatch({
    type: "GET_DAILY_DATA",
    payload: modifiedData,
  });
};

export const resetStore = () => async (dispatch) => {
  dispatch({
    type: 'RESET',
    payload: {}
  })
}

export const fetchCountries = () => async (dispatch) => {
  const {
    data: { countries },
  } = await axios.get(`${url}/countries`);
  dispatch({
    type: "GET_COUNTRIES",
    payload: countries.map((country) => country.name),
  });
};
