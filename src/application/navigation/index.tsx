import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import {SplashScreen} from '../../presentation/screens';

import {AuthContext} from '../contexts/Auth/Auth';

import {PrivateStack} from './PrivateStack';
import {PublicStack} from './PublicStack';

export default function Navigation() {
  const {auth, loading} = useContext(AuthContext);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {auth ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}
