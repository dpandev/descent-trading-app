import React, { useEffect, useContext } from 'react'
import AuthStack from "./AuthStack"
import MainNavigator from "./MainNavigator"
import { AuthenticatedUserContext } from "./AuthenticatedUserProvider"
import { Auth, Hub } from "aws-amplify"

export default function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext)

  useEffect(() => {
    const fetchUser = async () => {
      const loginUser = await Auth.currentAuthenticatedUser().catch(error => {
        console.log('authError:', error);
        setUser(null)
      })
      if (loginUser) {
        console.log('user is logged in: ', loginUser);
      } else {
        console.log('not working chief');
      }
    }

    fetchUser()
  }, [])

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === 'signIn') {
        setUser(data)
        console.log('data', data);
      }
    });

    Auth.currentAuthenticatedUser()
      .then(currentUser => setUser(currentUser))
      .catch(() => console.log("Not signed in"));

    return unsubscribe;
  }, []);

  return (
    <>
      {user ? 
        (
          <MainNavigator />
        ) : (
          <AuthStack />
        )
      }
    </>
  )
}