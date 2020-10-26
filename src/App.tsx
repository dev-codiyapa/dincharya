/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';
import SplashScreen from './common/splash-screen/SplashScreen.component';
import Login from './pages/login/Login.component';
import Home from './pages/home/Home.component';

const App = (): JSX.Element => {
  const [authToke, setAuthToken] = useState({});
  const [isLoading, setLoading] = useState(true);

  const isUserLogedIn = (): void => {
    setTimeout(() => {
      setLoading(false);
      setAuthToken({isUserLogedIn: true});
    }, 5000);
  };

  useEffect(() => {
    isUserLogedIn();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return <>{authToke === null ? <Login /> : <Home />}</>;
};

export default App;
