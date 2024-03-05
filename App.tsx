import {View, Text} from 'react-native';
import React from 'react';
import {NetworkLoggerProvider} from './src/uitls/NetworkLogger/NetoworkProvider';
import RouteUser from './src/routes/RouteUser/RouteUser';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <NetworkLoggerProvider>
        <RouteUser />
      </NetworkLoggerProvider>
    </NavigationContainer>
  );
};

export default App;
