import { Auth } from 'aws-amplify'

const cname = 'token'

function setToken() {
  return Auth.currentSession().then((res) => {
    let idToken = res.getIdToken()
    let jwtToken = idToken.getJwtToken()

    document.cookie = cname + '=' + jwtToken
  })
}

function getCookie(cname: string) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export function getToken() {
  return Auth.currentSession().then((res) => {
    let idToken = res.getIdToken()
    let jwtToken = idToken.getJwtToken()

    return jwtToken
  })
}
