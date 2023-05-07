// import { CognitoUser, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js'

// /* Config for CognitoID */
// const config = {
//   identityPool: process.env.REACT_APP_COGNITO_IDENTITY_POOL,
//   userPool: {
//     UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID ?? '',
//     ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID ?? '',
//   },
// }

// const getUserPool = () => new CognitoUserPool(config.userPool)

// const getUserAttributes = () => {
//   return getUserPool().getCurrentUser
// }

// const auth = (username: string, password: string, callback: (err: any, token: string | null) => void) => {
//   let user = new CognitoUser({
//     Username: username,
//     Pool: getUserPool(),
//   })

//   let authDetails = new AuthenticationDetails({
//     Username: username,
//     Password: password,
//   })

//   user.authenticateUser(authDetails, {
//     onSuccess: (session) => {
//       callback(null, session.getIdToken().getJwtToken())
//     },
//     onFailure: (err: any) => {
//       callback(err, null)
//     },
//   })
// }

// const signin = (username: string, password: string) => {
//   auth(username, password, (err, token) => {
//     if (err) {
//     }
//   })
// }

// const handleSubmit = async (event: any) => {
//   event.preventDefault()

//   try {
//     await signin(this.state.email, this.state.password)
//     alert('Logged in')
//   } catch (e) {
//     alert(e)
//   }
// }
