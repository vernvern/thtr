
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

function timestampToTime(timestamp) {
        const date = new Date(timestamp * 1000); //13位时间戳
        const Y = date.getFullYear() + '-';
        const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        const D = date.getDate() + ' ';
        const h = date.getHours() + ':';
        const m = date.getMinutes() + ':';
        const s = date.getSeconds();
        return Y+M+D+h+m+s;
}


export { GetAccessToken, timestampToTime };
