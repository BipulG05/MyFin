import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authnavigation from './layout/LoginSign/Authnavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <Authnavigation/>
    </NavigationContainer>
  )
}

export default RootNavigation