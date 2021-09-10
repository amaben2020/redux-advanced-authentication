// export default function authHeader() {
//   //gets the stringified data as an object to get the token attached to header
//   const user = JSON.parse(localStorage.getItem('user'));

//   if (user && user.accessToken) {
//     return { Authorization: 'Bearer ' + user.accessToken };
//   } else {
//     return {};
//   }
// }

//cos our node server uses x-access-token
export default function authHeader() {
  //gets the stringified data as an object to get the token attached to header
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
