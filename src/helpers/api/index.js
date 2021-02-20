import {objectString} from '../../helpers';

const headers = (token = false, multipart = false) => {
  let data;
  data = {
    'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
  };
  if (token) {
    data = {
      'Content-Type': multipart ? 'multipart/form-data' : 'application/json',
      authorization: token,
    };
  }
  return data;
};

export const requestPost = (data, url, token) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: headers(token),
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestPostMultipart = (data, url, token) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: headers(token, true),
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestGet = (data, url, token, bintari = false) => {
  return new Promise((resolve, reject) => {
    fetch(`${url}${objectString(data)}`, {
      method: 'GET',
      headers: headers(token, false, bintari),
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
