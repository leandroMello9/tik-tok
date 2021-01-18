import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRoutes from './Navigation';

const Main = () => {
  return (
    <NavigationContainer>
      <NavigationRoutes />
    </NavigationContainer>
  );
};

export default Main;
