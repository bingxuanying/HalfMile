// NPS API: lFXKhAtfjp1AENxaKYfQeyzPjfIHicorl6zvTolu
import React, { Component } from "react";

export const NationParkQ = key => {
  const API = ["lFXKhAtfjp1AENxaKYfQeyzPjfIHicorl6zvTolu"];
  let ApiIterator = 0;
  let url = "https://developer.nps.gov/api/v1/parks?";
  if (key) {
    url = url + `q=${key}`;
  }
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
