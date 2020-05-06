const initialState = {
  g_info: {},
  s_info: {},
  daily_data: [],
  countries: [],
};

export const getCorona = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GROBAL_INF":
      return {
        ...state,
        g_info: payload,
      };
    case "SPECIFIC_INF":
      return {
        ...state,
        s_info: payload,
      };
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: payload,
      };
    case "GET_DAILY_DATA":
      return {
        ...state,
        daily_data: payload,
      };

    case "RESET":
      return {
        g_info:state.g_info,
        countries:state.countries,
        daily_data:state.daily_data
      };
    default:
      return initialState;
  }
};
