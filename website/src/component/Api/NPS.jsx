// NPS API: lFXKhAtfjp1AENxaKYfQeyzPjfIHicorl6zvTolu
import React, { Component } from "react";

export const NationParkQ = data => {
  const API = ["lFXKhAtfjp1AENxaKYfQeyzPjfIHicorl6zvTolu"];
  let ApiIterator = 0;
  // Base HTTP request
  let url = "https://developer.nps.gov/api/v1/parks?";
  // keyWord request
  if (data.key) {
    url = url + `q=${data.key}`;
  }
  // State Request
  if (data.stateCode) {
    url = url + `&stateCode=${data.stateCode}`;
  }
  // Api Request
  url = url + "&api_key=" + API[ApiIterator];

  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", () => {
    console.log(url);
    console.log(xhr.responseText);
  });
  xhr.open("GET", url);
  xhr.send();
};
export const DisneyLandQ = key => {
  return null;
};
