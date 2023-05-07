import React, { createContext, useContext, useEffect, useState } from 'react'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify'

interface ApplicationState {
  cognitoUser: CognitoUser | undefined
  setCognitoUser: React.Dispatch<React.SetStateAction<CognitoUser | undefined>>
}

const ApplicationContext = createContext<ApplicationState>({
  cognitoUser: undefined,
  setCognitoUser: () => {},
})

const useApplicationState = (): ApplicationState => {
  const [cognitoUser, setCognitoUser] = useState<CognitoUser | undefined>(undefined)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setCognitoUser(user)
      })
      .catch((reason) => {
        console.log('get user session failed', reason)
      })
  }, [])

  return { cognitoUser, setCognitoUser }
}

export const ApplicationContextProvider: React.FunctionComponent<{children?: React.ReactNode}> = ({
    children,
  }) => (
    <ApplicationContext.Provider value={useApplicationState()}>
      {children}
    </ApplicationContext.Provider>
  )
  
  export const useApplicationContext = () => useContext(ApplicationContext);
