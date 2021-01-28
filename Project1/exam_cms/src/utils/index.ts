import Cookie from 'js-cookie';

const key = "authorization"
export function getToken(){
  return Cookie.get(key)
}

export function setToken(authorization: string){
  return Cookie.set(key, authorization, {expires: 1});
  // let date = new Date(+new Date() + 1000*60*60*5);
  // return Cookie.set(key, authorization, {expires: date});
}

export function removeToken(){
  return Cookie.remove(key);
}

