import Cookies from 'js-cookie';

export const setCookie = (cname: string, cvalue: any) => {
	Cookies.set(cname, JSON.stringify(cvalue));
};

export const getCookie = (cname: any) => Cookies.get(cname);

export const removeCookie = (cname: any) => {
	Cookies.remove(cname);
};
