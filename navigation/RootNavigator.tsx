import React, { useEffect, useContext, useState } from 'react'
import AuthStack from "./AuthStack"
import MainNavigator from "./MainNavigator"
import { AuthenticatedUserContext } from "./AuthenticatedUserProvider"
import { API, Auth, graphqlOperation, Hub } from "aws-amplify"
import { getUser } from '../src/graphql/queries'
import { ActivityIndicator } from 'react-native'

export default function RootNavigator() {
  const { theUser, setTheUser } = useContext(AuthenticatedUserContext)
  const [isLoading, setIsLoading] = useState(false)


  const fetchUserData = async (loginUser: string) => {
    try {
      const response = await API.graphql(
        graphqlOperation(
          getUser,
          {id: loginUser }
        )
      )
      setTheUser(response.data.getUser)
      setIsLoading(false)
      return
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {//will use hub events for email signup/signin too
    console.log('UseEffect2');
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      setIsLoading(true)
      console.log('ROOTevent', event);
      if (event === 'signIn') {
        fetchUserData(data.signInUserSession.accessToken.payload.sub)
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {theUser ? 
        (
          <MainNavigator />
        ) : (
          <AuthStack />
        )
      }
    </>
  )
}