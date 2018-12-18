const axios = require('axios')
const functions = {
  add: (a, b) => a + b,
  isNulll: () => null,
  checkValue: (a) => a,
  createUser: () => {
    const User = { firstname: 'Abdelhedi', lastnaem: 'Hlel' }
    return User;
  },
  searchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.ddata)
      .catch(err => 'error')
}
module.exports = functions;
