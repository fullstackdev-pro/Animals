
export const infoFetching = () => {
  return {
    type: "INFO_FETCHING",
  };
};

export const infoFetched = (allInfo) => {
  return {
    type: "INFO_FETCHED",
    payload: allInfo,
  };
};

export const dataClicked = (data) => {
  return {
    type: "DATA_CLICKED",
    payload: data,
  };
};

