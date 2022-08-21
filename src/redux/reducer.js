const initialState = {
  allInfo: [],
  infoLoadingStatus: 'default',
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INFO_FETCHING":
      return {
        ...state,
        infoLoadingStatus: "loading",
      };
    case "INFO_FETCHED":
      return {
        ...state,
        allInfo: action.payload,
        infoLoadingStatus: "default",
      };
    case "DATA_CLICKED":
      return{
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
