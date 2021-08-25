import Cookies from "js-cookie";

export const setCookie = (cname: any, cvalue: any) => {
  Cookies.set(cname, JSON.stringify(cvalue));
};

export const getCookie = (cname: any) => {
  return Cookies.get(cname);
};

export const removeCookie = (cname: any) => {
  Cookies.remove(cname);
};
