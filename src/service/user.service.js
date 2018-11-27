import request from 'request-promise'

function login(userpackage) {

  let username = userpackage.username
  let password = userpackage.password
  let authstring = userpackage.authstring

  const uri = `${global.CONFIG.BACKEND.ADDRESS}/testauth`
  return request({
    method: 'get',
    simple: false,
    resolveWithFullResponse: true,
    uri,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + authstring
    }
  })
    .then((res) => {return res.statusCode})



  // Remove the following when writing the real func
  // const user = {
  //   id: 1,
  //   token: 'token'
  // }
  // localStorage.setItem('user', JSON.stringify(user))
}

function logout() {

}

function register() {

}

/**
 * Update the user if fields exists.
 * Used to update password.
 */
function update(user) {
    
}

export default {
  login,
  logout,
  register,
  update
}