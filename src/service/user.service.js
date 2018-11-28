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
    .then((res) => {
      return res.statusCode})



  // Remove the following when writing the real func
  // const user = {
  //   id: 1,
  //   token: 'token'
  // }
  // localStorage.setItem('user', JSON.stringify(user))
}

function logout() {

}

function register(registrationpackage) {

  const uri = `${global.CONFIG.BACKEND.ADDRESS}/user/create`
  return fetch(uri, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registrationpackage)
  })

  // // How can I access the res.status from outside this function? As you see, setState below doesn't work.
  //     .then(res => { console.log(res.status); return res.json() })
  //     .then(res => {
  //         console.log('response from server is: ', res)
  //         ////////The below doesn't work. Scope issue?
  //         // this.setState({notify: true, notify_text: res});
  //     })

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