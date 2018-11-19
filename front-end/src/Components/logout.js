
function logout(){
  localStorage.removeItem('access_token');
  localStorage.removeItem('expires_in');
}


export { logout };
