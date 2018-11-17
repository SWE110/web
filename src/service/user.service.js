
function login(username, password) {
  // Remove the following when writing the real func
  const user = {
    id: 1,
    token: 'token'
  }
  localStorage.setItem('user', JSON.stringify(user))
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