import axios from "axios";

export const updateKeyword = keyword => {
  return {
    type: "UPDATE_KEYWORD",
    payload: keyword
  };
};

export const fetchData = data => {
  const API = ["lFXKhAtfjp1AENxaKYfQeyzPjfIHicorl6zvTolu"];
  let ApiIterator = 0;
  // Base HTTP request
  let url = "https://developer.nps.gov/api/v1/parks?";
  // keyWord request
  if (data.keyword) {
    url = url + `q=${data.keyword}`;
  }
  // State Request
  if (data.stateCode) {
    url = url + `&stateCode=${data.stateCode}`;
  }
  // Api Request
  url = url + "&api_key=" + API[ApiIterator];

  axios.get(url).then(res => {
    console.log("raw data: ", res.data);
    return {
      type: "FETCH_DATA",
      payload: res.data
    };
  }).catch(err => {
    console.log(err)
    return { type: "FETCH_DATA_ERROR", payload: err }
  });

};
