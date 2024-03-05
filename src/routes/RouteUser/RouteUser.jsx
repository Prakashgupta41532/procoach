import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteUserName from './RouteUsernames';
import ScreenLogin from '../../Screens/ScreenLogin/ScreenLogin';
import { ScreenNetworkLogger } from '../../uitls/NetworkLogger/ScreenNetworkLogger/ScreenNetworkLogger';

const UserStack = createNativeStackNavigator();

function RouteUser() {
  return (
    <UserStack.Navigator
      initialRouteName={RouteUserName.ScreenLogin}
      screenOptions={{ headerShown: false }}
    >
      <UserStack.Screen
        name={RouteUserName.ScreenLogin}
        component={ScreenLogin}
      />
      <UserStack.Screen
        name={RouteUserName.ScreenNetworkLogger}
        component={ScreenNetworkLogger}
      />
    </UserStack.Navigator>
  );
}

export default RouteUser;
