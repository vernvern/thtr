
import { logout } from './logout';


function GetAccessToken() {
  const expires_in = localStorage.getItem('expires_in');
  const now = Date.parse( new Date()) / 1000;
  if (now > expires_in){
    logout();
    return null;
  } else {
    return localStorage.getItem('access_token');
  }
}


export { GetAccessToken };
