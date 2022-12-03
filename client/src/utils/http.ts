import decode from "jwt-decode";
import { CORE_API_URL } from "./environment";

// eslint-disable-next-line
export const request = (
  endPoint: string,
  method: string,
  payload?: any,
  headers?: any
) => {
  headers = headers || {};
  const token = localStorage.getItem("access_token");

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const url = `${CORE_API_URL}${endPoint}`;
  return fetch(url, {
    method,
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    if (!response.ok) {
      const { exp } = decode(localStorage.getItem("access_token") || "") as {
        exp: number;
      };
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem("access_token");
        window.location.reload();
      }
    }
    return response;
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestFileUpload = (
  url: string,
  method: string,
  payload?: any,
  headers?: any
) => {
  headers = headers || {};
  const token = localStorage.getItem("access_token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return fetch(url, {
    method,
    mode: "cors",
    cache: "no-cache",
    headers: {
      ...headers,
    },
    body: payload,
  });
};

// eslint-disable-next-line
export const post = (endPoint: string, payload?: any) => {
  return request(endPoint, "POST", payload);
};

// eslint-disable-next-line
export const put = (endPoint: string, payload: any) => {
  return request(endPoint, "PUT", payload);
};

export const get = (endPoint: string) => {
  return request(endPoint, "GET");
};

export const del = (endPoint: string) => {
  return request(endPoint, "DELETE");
};

// eslint-disable-next-line
export const patch = (endPoint: string, payload: any) => {
  return request(endPoint, "PATCH", payload);
};

export const deleteItem = (endPoint: string) => {
  return request(endPoint, "DELETE");
};

// eslint-disable-next-line
export const update = (endPoint: string, paylad: any) => {
  return request(endPoint, "PATCH", paylad);
};

export const getJSON = async (url: string) => {
  const res = await get(url);
  return res.json();
};

// eslint-disable-next-line
export const postJSON = async (endPoint: string, payload: any) => {
  const res = await post(endPoint, payload);
  return res.json();
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postFile = (endPoint: string, payload: any) => {
  return requestFileUpload(endPoint, "POST", payload);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postUnAuthorized = (url: string, body: any) => {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
