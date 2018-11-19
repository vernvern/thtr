function GetAccessToken() {
  const expires_in = localStorage.getItem('expires_in');
  const now = Date.parse( new Date()) / 1000;
  if (now > expires_in){
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_in');
    return null;
  } else {
    return localStorage.getItem('access_token');
  }
}


export { GetAccessToken };
